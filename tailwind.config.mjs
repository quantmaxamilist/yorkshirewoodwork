/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,ts,js}'],
  theme: {
    extend: {
      colors: {
        paper: '#F6F1E7', sawdust: '#ECE3D3', char: '#17120D', walnut: '#3A2414',
        oak: '#B9793A', honey: '#D9A866', moss: '#82A064', forest: '#4E6B37', willow: '#46A02C', steel: '#8C8A84',
      },
      fontFamily: {
        serif: ['Gloock', 'Georgia', 'serif'],
        stamp: ['"Big Shoulders Stencil Display"', 'Impact', 'sans-serif'],
        sans: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
