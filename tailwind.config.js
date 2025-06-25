/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFDF5',
          100: '#FFFBE6',
          200: '#FFF7CC',
          300: '#FFF2A3',
          400: '#FFEA7A',
          500: '#FFE252',  // Primary yellow
          600: '#F9C22E',
          700: '#E5A515',
          800: '#CC8B0E',
          900: '#A36A09',
        },
        secondary: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        accent: {
          50: '#FFF5F5',
          100: '#FFF0F0',
          200: '#FFDADA',
          300: '#FFC0C0',
          400: '#FF9A9A',
          500: '#FF7373',
          600: '#FF4D4D',
          700: '#E53E3E',
          800: '#C53030',
          900: '#9B2C2C',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 10px 30px -5px rgba(0, 0, 0, 0.1), 0 4px 11px -5px rgba(0, 0, 0, 0.05)',
        'card': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'pattern-dots': 'radial-gradient(var(--dot-color) 2px, transparent 2px)',
        'pattern-lines': 'linear-gradient(to right, var(--line-color) 1px, transparent 1px)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-call': 'bounceCall 2s ease-in-out infinite',
        'ring': 'ring 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        bounceCall: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.05)' },
        },
        ring: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(1.4)', opacity: '0' },
        }
      }
    },
  },
  plugins: [],
} 