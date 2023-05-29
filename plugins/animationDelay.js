const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(
  ({ matchUtilities, theme }) => {
    matchUtilities(
      {
        //Allow dynamic values to specific css command
        "animation-delay": (value) => {
          //Tailwind expects camelCase, the value is dynamic and is applied to the class name
          return {
            animationDelay: value,
          };
        },
      },
      {
        //assign default values to class
        values: theme("animationDelay"),
      }
    );
  },
  {
    //add theme with values to specific class, lice animation-delay-100, animation-delay-200 and so on
    theme: {
      // className
      animationDelay: {
        100: "100ms",
        200: "200ms",
        300: "300ms",
        400: "400ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
    },
  }
);

module.exports = animationDelay;
