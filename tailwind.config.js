/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#e6f0ff',
          100: '#b3d1ff',
          200: '#80b3ff',
          300: '#4d94ff',
          400: '#2680ff',
          500: '#0052CC',
          600: '#0047b3',
          700: '#003b99',
          800: '#002f80',
          900: '#002066',
          950: '#001133',
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
          50: '#f7f8fc',
          100: '#f0f2f7',
          200: '#e2e6f0',
          300: '#cdd3e5',
        },
      },
      fontFamily: {
        display: ['Montserrat', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': 'linear-gradient(135deg, #0052CC 0%, #003b99 30%, #002f80 60%, #002066 100%)',
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
