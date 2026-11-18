/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        assiko: {
          bg: '#0c0c0e',
          dark: '#141418',
          card: '#1a1a20',
          'card-hover': '#22222a',
          border: '#282832',
          subtle: '#363644',
          yellow: '#ffde00',
          mint: '#00ffa2',
          orange: '#ff652f',
          purple: '#4e00c2',
          violet: '#8b5cf6',
          cyan: '#00e5ff',
          muted: '#8a8a9a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Syne', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spark-pulse': 'sparkPulse 2s ease-in-out infinite',
        'flare-float': 'flareFloat 8s ease-in-out infinite alternate',
        'border-glow': 'borderGlow 3s ease infinite',
        'meteor': 'meteor 5s linear infinite',
      },
      keyframes: {
        sparkPulse: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '0.4', transform: 'scale(0.95)' },
        },
        flareFloat: {
          '0%': { transform: 'translate(0, 0) scale(1)' },
          '100%': { transform: 'translate(30px, -20px) scale(1.1)' },
        },
        borderGlow: {
          '0%, 100%': { borderColor: 'rgba(255, 222, 0, 0.3)' },
          '50%': { borderColor: 'rgba(0, 255, 162, 0.4)' },
        },
      },
      boxShadow: {
        'spark-yellow': '0 0 25px -3px rgba(255, 222, 0, 0.35)',
        'spark-mint': '0 0 25px -3px rgba(0, 255, 162, 0.35)',
        'spark-orange': '0 0 25px -3px rgba(255, 101, 47, 0.35)',
        'spark-purple': '0 0 35px -5px rgba(78, 0, 194, 0.4)',
        'card-glow': '0 10px 30px -10px rgba(0, 0, 0, 0.7), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
      },
    },
  },
  plugins: [],
}
