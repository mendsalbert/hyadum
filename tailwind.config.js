module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        playFair: "'Playfair Display', serif",
        Abril: "'Abril Fatface', cursive",
        Sarabun: "'Sarabun', sans-serif",
        Montserrat: "'Montserrat', sans-serif",
        SecularOne: "'Secular One', sans-serif",
      },
      backgroundImage: {
        "website-logo": "url('/images/logo.png')",
        "header-backgroundImage": "url('/images/headerBackground.jpg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
