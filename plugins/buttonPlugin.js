const plugin = require("tailwindcss/plugin");
const { default: lightOrDarkColor } = require("@check-light-or-dark/color");

const buttonPlugin = plugin(({ addComponents, matchComponents, theme }) => {
  // Create custom components
  // Iterate through theme object to get al the colors and variants
  addComponents({
    ".btn": {
      display: "inline-block",
      cursor: "pointer",
      fontWeight: "bold",
      padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
      borderRadius: theme("borderRadius").lg,
    },
  });

  for (let color in theme("colors")) {
    if (typeof theme("colors")[color] !== String) {
      for (let key in theme("colors")[color]) {
        const colorType = lightOrDarkColor(theme("colors")[color][key]);
        addComponents({
          [`.btn-${color}-${key}`]: {
            backgroundColor: theme("colors")[color][key],
            color: `${colorType === "dark" ? "white" : "black"}`,
          },
        });
      }
    }
  }

  // This allow the user to set custom classes like btn-[#FFF]
  matchComponents({
    btn: (value) => {
      return {
        backgroundColor: value,
        color: lightOrDarkColor(value) === "dark" ? "white" : "black",
      };
    },
  });
});

module.exports = buttonPlugin;
