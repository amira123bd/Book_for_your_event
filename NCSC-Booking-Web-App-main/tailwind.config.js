module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./pages/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/*.{js,ts,jsx,tsx}",
    "./src/**/**/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Exo", "sans-serif"],
      serif: ["Montserrat", "serif"],
      display: ["Techno Hideo"],
    },

    backgroundImage: {
      mainImage: "url('../public/assets/Background.png')",
      logoPNG: "url('assets/logo.png')",
      globe:"url('../public/assets/globeBg.png')"
    },
    extend: {
      colors: {
        brand: "#970000",
      },
    },
  },
  plugins: [],
};
