/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
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
      spacing: {
        'safe-top': 'env(safe-area-inset-top)',
        'safe-bottom': 'env(safe-area-inset-bottom)',
        'safe-left': 'env(safe-area-inset-left)',
        'safe-right': 'env(safe-area-inset-right)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
      animation: {
        marquee: 'marquee 5s linear infinite',
      }
    },
  },
  plugins: [],
}

