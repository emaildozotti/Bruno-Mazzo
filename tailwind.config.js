/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#C9952A',
        'primary-hover': '#E0A830',
        'primary-muted': 'rgba(201, 149, 42, 0.10)',
        dark: '#1A1A1E',
        'bg-warm': '#2D2D35',
        'bg-light': '#F5F2ED',
        'text-light': '#E8E4DC',
        'text-muted': 'rgba(232, 228, 220, 0.65)',
        'text-dark': '#1A1A1E',
        accent: '#2A3B2F',
        'accent-hover': '#344D39',
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['clamp(2rem, 5vw, 3.25rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'h2': ['clamp(1.5rem, 3.5vw, 2.25rem)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['clamp(1.125rem, 2.5vw, 1.5rem)', { lineHeight: '1.3' }],
      },
      borderRadius: {
        DEFAULT: '4px',
        sm: '2px',
        lg: '8px',
        full: '9999px',
      },
      boxShadow: {
        deep: '0 4px 24px rgba(0,0,0,0.4)',
        'primary-glow': '0 8px 24px rgba(201, 149, 42, 0.35)',
      },
      spacing: {
        section: '6rem',
        'section-sm': '4rem',
      },
      maxWidth: {
        prose: '720px',
        layout: '1280px',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'gradient-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.7s ease-out forwards',
        aurora: 'aurora 8s ease infinite',
        shimmer: 'shimmer 3s linear infinite',
        marquee: 'marquee 30s linear infinite',
        'gradient-text': 'gradient-text 4s ease infinite',
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
}
