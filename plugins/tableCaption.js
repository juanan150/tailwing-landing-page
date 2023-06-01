const plugin = require("tailwindcss/plugin");

const tableCaption = plugin(({ addUtilities }) => {
  // Add static classes to be used
  addUtilities({
    ".caption-bottom": {
      "caption-side": "bottom",
    },
    ".caption-top": {
      "caption-side": "top",
    },
  });
});

module.exports = tableCaption;
