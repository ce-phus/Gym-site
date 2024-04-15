/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js'],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        noto: ['Noto Serif Display'],
        mono: ['var(--font-roboto-mono)'],
      },
      colors: {
        dark: "#OC1821",
        bgprimary:"#9a9a9a",
        accent: "#efdfbb",
        primary: "#000000",
        secondary: "#111111",
        tertiary: "#FFF200",
        grade: "#c30010"
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/bg.jpg')",
        "hero-bg": "url('/src/assets/products/Gym1.jpg')",
        "hero-footer": "url('/src/assets/footer-bg.jpg')"
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
