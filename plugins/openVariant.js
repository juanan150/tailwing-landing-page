const plugin = require("tailwindcss/plugin");

const openVariant = plugin(({ addVariant }) => {
  // Create combination of classes, in this case merge 2 classes
  addVariant("group-open", ":merge(.group).open & ");
  addVariant("peer-open", ":merge(.peer).open ~ & ");
});

module.exports = openVariant;
