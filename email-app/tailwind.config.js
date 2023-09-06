/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },

      colors: {
        white: "#F3F3F3",
        green: "#62BD84",
        greenbg: "#EAF9F4",
        red: "#f46262",
        redbg: "#F34E4E",
        blue: "#4ACCED",
        bluebg: "#E2FAFF",
        black: "#5D5D5D",
        yellow: "#F8D273",
      },
    },
  },
  plugins: [],
};

