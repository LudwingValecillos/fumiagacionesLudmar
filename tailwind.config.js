/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f5ed',
          100: '#b3e0c8',
          200: '#80cba3',
          300: '#4db67e',
          400: '#26a663',
          500: '#006837',
          600: '#005c30',
          700: '#004d28',
          800: '#003d1f',
          900: '#002a15',
          950: '#001a0d',
        },
        navy: {
          50: '#e6f0f7',
          100: '#b3d4e8',
          200: '#80b8d9',
          300: '#4d9cca',
          400: '#2688bf',
          500: '#005F99',
          600: '#005489',
          700: '#004672',
          800: '#00385c',
          900: '#002640',
        },
        accent: {
          50: '#fff8e6',
          100: '#ffeab3',
          200: '#ffdc80',
          300: '#ffce4d',
          400: '#ffc426',
          500: '#FFA500',
          600: '#e69500',
          700: '#cc8400',
          800: '#b37300',
          900: '#8c5a00',
        },
        surface: {
          50: '#fafbf7',
          100: '#f3f5ee',
          200: '#e8eade',
          300: '#d4d8c8',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': 'linear-gradient(135deg, #006837 0%, #004d28 30%, #003d1f 60%, #002a15 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};
