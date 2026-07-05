/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        accent: {
          DEFAULT: '#8b5cf6',
          bright: '#a78bfa',
          deep: '#7c3aed',
          faint: 'rgba(139, 92, 246, 0.12)',
        },
      },
    },
  },
  plugins: [],
}
