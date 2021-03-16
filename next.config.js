const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const isProd = process.env.NODE_ENV === "production";

const { ON_GITHUB_PAGES } = process.env;

const basePath = "";
// const assetPrefix = ON_GITHUB_PAGES ? "https://cdn.statically.io/gh/minhoyooDEV/minhoyoodev.github.io/gh-pages/" : "";
const assetPrefix = "";

// https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn
module.exports = (phase, { defaultConfig }) => {
  //   if (phase === PHASE_DEVELOPMENT_SERVER) {
  //     return {
  //       /* development only config options here */
  //     };
  //   }

  return {
    webpack: function (config) {
      config.module.rules.push({
        test: /\.md$/,
        use: "raw-loader",
      });
      return config;
    }.basePath,
    assetPrefix,
  };
};
