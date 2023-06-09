/** @type {import('tailwindcss').Config} */
module.exports = {
  // This is used to handle dark mode based on class instead of system prefs
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      // Keyframes for animation
      keyframes: {
        //Keyframe name
        wavey: {
          //Animation config
          "0%, 100%": {
            transform: "scaleY(0.5)",
          },
          "50%": {
            transform: "scaleY(1.5)",
          },
        },
      },
      //Name will be animation-wavey
      animation: {
        //relation to keyframe, css command
        wavey: "wavey 1000ms linear infinite",
      },
    },
  },
  plugins: [
    require("./plugins/openVariant"),
    require("./plugins/animationDelay"),
    require("./plugins/tableCaption"),
    require("./plugins/buttonPlugin"),
  ],
};
