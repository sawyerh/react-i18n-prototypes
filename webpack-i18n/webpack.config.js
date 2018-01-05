const path = require("path");
const I18nPlugin = require("i18n-webpack-plugin");
const languages = {
  en: require("./locale/en.json"),
  es: require("./locale/es.json")
};

module.exports = Object.keys(languages).map(function(language) {
  return {
    name: language,
    entry: "./src/components/index.js",
    output: {
      filename: `index.${language}.js`,
      path: path.resolve(__dirname, "dist/components")
    },
    plugins: [new I18nPlugin(languages[language])],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: [/node_modules/],
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: ["es2015", "react"]
              }
            }
          ]
        }
      ]
    }
  };
});
