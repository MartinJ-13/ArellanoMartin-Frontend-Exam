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
        redbg: "#FDF2F2",
        blue: "#4ACCED",
        bluebg: "#E2FAFF",
        black: "#5D5D5D",
        yellow: "#F8D273",
        hyperlink: "#2C62CD",
      },
    },
  },
  plugins: [],
};

