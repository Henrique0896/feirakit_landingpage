/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: '0',
            transform: 'translateY(-10px)'
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)'
          }
        }
      },
      animation: {
        slidein: 'slidein 1s ease var(--slidein-delay,0) forwards'
      },
      colors: {
        blue: {
          950: '#0000FF',
          900: '#056cf3',
          850: 'rgba(5, 108, 243, 0.3)',
          800: '#4b94f2',
          700: '#0088a7',
          600: '#038c8c',
          500: '#6fbfbf'
        }
      },
      backgroundImage: {
        'hero-pattern': "url('../../public/assets/banner.jpeg')",
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'parallax-effect': "url('../../public/assets/parallax.jpg')"
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '50%': '50%',
        '70%': '70%'
      }
    }
  },
  plugins: []
};
