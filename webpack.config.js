const path = require("path");

module.exports = {
  resolve: {
    alias: {
      Assets: path.resolve(__dirname, "src/assets"),
    },
  },
};
