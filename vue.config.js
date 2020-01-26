const path = require("path");

module.exports = {
  outputDir: path.resolve(__dirname, "./docs"),
  publicPath: process.env.NODE_ENV === 'production'
    ? '/vendor-system/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: [
            path.resolve(__dirname, 'src/')
          ],
          indentedSyntax: true,
        },
        prependData: '@import "~@/custom.scss"',
      },
    }
  }
}