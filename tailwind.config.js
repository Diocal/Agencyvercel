const { default: daisyui } = require("daisyui");

module.exports = {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,vue,svelte}',
    './public/**/*.html',
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui:{
    themes:[
      'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate', 'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe', 'black', 'luxury', 'dracula'
    ],
  }
};
