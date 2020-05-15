const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@use "~@/styles/_global.scss" as global;`
      }
    }
  }
};