import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const HeroNeuralCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 28;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D elements
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. Neural Nodes (Points/Spheres)
    const nodeCount = 64;
    const nodeGeometry = new THREE.SphereGeometry(0.18, 16, 16);
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x8b5cf6, // electric violet
    });
    const cyanNodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4, // cyan
    });

    const nodePositions: THREE.Vector3[] = [];
    const nodeMeshes: THREE.Mesh[] = [];

    // Distribute nodes in a spherical / double-helix neural cluster
    for (let i = 0; i < nodeCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 5.5 + Math.random() * 3.5;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      const pos = new THREE.Vector3(x, y, z);
      nodePositions.push(pos);

      const mesh = new THREE.Mesh(
        nodeGeometry,
        i % 4 === 0 ? cyanNodeMaterial : nodeMaterial
      );
      mesh.position.copy(pos);
      mainGroup.add(mesh);
      nodeMeshes.push(mesh);
    }

    // 2. Synaptic Connections (Lines between nearby nodes)
    const linePositions: number[] = [];
    const lineColors: number[] = [];
    const colorViolet = new THREE.Color(0x8b5cf6);
    const colorCyan = new THREE.Color(0x06b6d4);

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dist = nodePositions[i].distanceTo(nodePositions[j]);
        if (dist < 4.5) {
          linePositions.push(
            nodePositions[i].x, nodePositions[i].y, nodePositions[i].z,
            nodePositions[j].x, nodePositions[j].y, nodePositions[j].z
          );

          const mixedColor = i % 3 === 0 ? colorCyan : colorViolet;
          lineColors.push(mixedColor.r, mixedColor.g, mixedColor.b);
          lineColors.push(mixedColor.r, mixedColor.g, mixedColor.b);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    lineGeometry.setAttribute(
      'color',
      new THREE.Float32BufferAttribute(lineColors, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending
    });

    const lineSegments = new THREE.LineSegments(lineGeometry, lineMaterial);
    mainGroup.add(lineSegments);

    // 3. Central Holographic Core (Wireframe Icosahedron)
    const coreGeometry = new THREE.IcosahedronGeometry(3.6, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreMaterial = new THREE.LineBasicMaterial({
      color: 0x8b5cf6,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const coreMesh = new THREE.LineSegments(coreWireframe, coreMaterial);
    mainGroup.add(coreMesh);

    // 4. Outer Orbital Ring
    const ringGeometry = new THREE.TorusGeometry(8.2, 0.04, 16, 100);
    const ringMaterial = new THREE.MeshBasicMaterial({
      color: 0x06b6d4,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });
    const ringMesh = new THREE.Mesh(ringGeometry, ringMaterial);
    ringMesh.rotation.x = Math.PI / 3;
    ringMesh.rotation.y = Math.PI / 6;
    mainGroup.add(ringMesh);

    // 5. Ambient Floating Particles
    const particleCount = 200;
    const particleGeometry = new THREE.BufferGeometry();
    const particleCoords = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particleCoords[i] = (Math.random() - 0.5) * 36;
      particleCoords[i + 1] = (Math.random() - 0.5) * 36;
      particleCoords[i + 2] = (Math.random() - 0.5) * 36;
    }

    particleGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(particleCoords, 3)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0xa78bfa,
      size: 0.12,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      mouseX = (x / rect.width - 0.5) * 2;
      mouseY = -(y / rect.height - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerping
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Group rotation
      mainGroup.rotation.y = elapsedTime * 0.12 + targetX * 0.6;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.08) * 0.15 - targetY * 0.6;

      // Core rotation
      coreMesh.rotation.y = -elapsedTime * 0.2;
      coreMesh.rotation.z = elapsedTime * 0.15;

      // Ring rotation
      ringMesh.rotation.z = elapsedTime * 0.08;

      // Particles slow drift
      particles.rotation.y = elapsedTime * 0.03;

      // Pulsing node glow
      const scale = 1 + Math.sin(elapsedTime * 2) * 0.06;
      coreMesh.scale.set(scale, scale, scale);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose resources
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      cyanNodeMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      coreGeometry.dispose();
      coreWireframe.dispose();
      coreMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[420px] sm:min-h-[520px] relative pointer-events-auto"
      aria-label="Interactive 3D Neural Network Simulation"
    />
  );
};
