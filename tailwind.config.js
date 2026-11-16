/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#070709',
        surface: {
          DEFAULT: '#0f0f14',
          subtle: '#15151c',
          border: 'rgba(255, 255, 255, 0.08)',
          'border-hover': 'rgba(139, 92, 246, 0.35)',
        },
        violet: {
          accent: '#8b5cf6',
          light: '#a78bfa',
          glow: 'rgba(139, 92, 246, 0.25)',
        },
        cyan: {
          accent: '#06b6d4',
          subtle: '#22d3ee',
          glow: 'rgba(6, 182, 212, 0.2)',
        },
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Syne', 'Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'subtle-grid': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      animation: {
        'pulse-subtle': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
