/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {backgroundImage: {
      'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      'conic-gradient': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
    },},
  },
  plugins: [require('flowbite/plugin')],
}

