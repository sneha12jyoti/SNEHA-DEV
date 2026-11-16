# SNEHA.DEV — Developer Portfolio

A world-class, futuristic, editorial developer portfolio built for **K Sneha** (AI/ML Engineer & Software Developer).

Inspired by contemporary creative developer design (inspired by modern Awwwards/satym.in aesthetics), with deep black & charcoal palettes, electric violet & subtle cyan accents, interactive 3D neural network visuals (Three.js), Lenis smooth scrolling, command palette (`Ctrl+K`), an interactive CLI terminal, and comprehensive project case studies.

---

## 🌟 Key Features

- **Cinematic Loading Experience:** Animated `SNEHA.DEV` boot sequence with status telemetry and smooth transition.
- **Interactive 3D Neural Topology:** Built with Three.js featuring 64 dynamic neural nodes, synaptic line pulses, an orbiting holographic icosahedron, and mouse parallax.
- **Glassmorphic Floating Navigation:** Section spy, mobile responsive drawer, and quick search trigger.
- **Global Command Palette (`Ctrl+K`):** Keyboard accessible jump-to-section palette and instant actions.
- **Interactive Unix-inspired CLI Terminal:** Supports `help`, `about`, `skills`, `projects`, `experience`, `education`, `contact`, `github`, `whoami`, `clear`, and command history.
- **Curated 6 Selected Projects:**
  1. *Explainable Multi-Objective Metaheuristic Optimization for Software Defect Prediction* (Flagship Research: NSGA-II, GA, PSO, SHAP).
  2. *MediBot* (Conversational AI Healthcare Assistant).
  3. *Fault Diagnosis in Power Systems Using ML & DL* (NIT Jamshedpur Research Internship).
  4. *SnapClass: AI Attendance System* (Dual-factor facial recognition & voice authentication).
  5. *Mental Health Score Predictor* (Scikit-learn student wellness behavioral platform).
  6. *Packet Analyzer: Deep Packet Inspection Engine* (Concurrent Java PCAP parser).
- **Interactive Case Study Modals:** In-depth technical architecture breakdowns, module specifications, and direct GitHub links.
- **Contact Form & Direct Channels:** Validated form with mailto fallback and support for serverless webhook integration.

---

## 🚀 Getting Started

### 1. Development Server
To start the local Vite development server:
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 2. Production Build
To run TypeScript verification and generate optimized bundles:
```bash
npm run build
```

### 3. Preview Production Build
```bash
npm run preview
```

---

## 📄 Adding Your Resume PDF
To activate the **Download Resume** buttons in the Hero section and Navigation bar:
1. Copy your resume file into `public/resume.pdf`.
2. The portfolio is pre-configured to link directly to `/resume.pdf`.

---

## 📬 Contact Form Configuration (Optional)
The contact form works out of the box using a standardized `mailto:` dispatcher. If you wish to send emails through an external service (such as Formspree, Web3Forms, or EmailJS):
1. Create a `.env` file in the root directory:
```env
VITE_CONTACT_ENDPOINT=https://formspree.io/f/your_form_id
```
2. Re-run `npm run build`.

---

## 🛠️ Tech Stack
- **Framework:** React 18, Vite 5, TypeScript
- **Styling:** Tailwind CSS, PostCSS
- **Animations:** Framer Motion, Lenis Smooth Scroll
- **3D Graphics:** Three.js
- **Icons:** Lucide React
