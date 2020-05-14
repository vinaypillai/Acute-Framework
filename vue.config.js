const path = require("path");

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
$font-size: 20px;
        $font-stack: 'Lato', sans-serif;
$font-lg: 48px;
$font-sm: 12px;
$font-color: #333;
`,
      }
    }
  }
};