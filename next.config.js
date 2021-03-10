const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
const isProd = process.env.NODE_ENV === "production";

const {
  EMAIL_JS_SERVICE,
  EMAIL_JS_TEMPLATE,
  EMAIL_JS_USER,
  CAPTCHA_SITE_KEY,
  GTAG,
  ON_GITHUB_PAGES,
} = process.env;

const basePath ="";
// const basePath = ON_GITHUB_PAGES ? "/mynome" : "";
const assetPrefix = ON_GITHUB_PAGES ? "https://cdn.statically.io/gh/minhoyooDEV/minhoyoodev.github.io/gh-pages/" : "";

// https://dev.to/jameswallis/deploying-a-next-js-app-to-github-pages-24pn
module.exports = (phase, { defaultConfig }) => {
//   if (phase === PHASE_DEVELOPMENT_SERVER) {
//     return {
//       /* development only config options here */
//     };
//   }

  return {
    /* config options for all phases except development here */
    basePath,
    // assetPrefix: isProd ? '/minhoyooDEV.github.io/' : '',
    assetPrefix,
  };
};
