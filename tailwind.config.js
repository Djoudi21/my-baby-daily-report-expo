/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#212121",
        error: "#cb0505",
        bright: "#FDFDFD",
        lightSlateBlue: "#9296FE",
        mediumSlateBlue: "#363772",
        whitesmoke: "#F5F5F5",
        midnightBlue: "#03074F",
        purple: "#7054FF",
        lavender: "#E9E9EE",
        hanPurple: "#E3E2FD",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
