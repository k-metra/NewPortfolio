/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: '#0d0d0d',
        surface: '#1a1a1a',
        primary: '#00bfa6',
        secondary: '#3d7eff',
        text: {
          primary: '#f5f5f5',
          muted: '#9ca3af',
        },
        border: '#2a2a2a',
        danger: '#ef4444',
      },
      fontFamily: {
        jetbrains: ["'JetBrains Mono'", "monospace"],
      },
    },
  },
  plugins: [],
}

