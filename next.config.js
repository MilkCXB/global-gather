const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const path = require('path');
// const { locales, sourceLocale } = require('./lingui.config.js')

module.exports = withPlugins([
  [optimizedImages, {
    /* config for next-optimized-images */
  }],

  // your other plugins here

], {
  reactStrictMode: true,
  images: {
    disableStaticImages: true
  },
  // i18n: {
  //   locales,
  //   defaultLocale: sourceLocale,
  //   // realDefaultLocale: sourceLocale,

  //   // Set LocalDetection to false so that you not get redirected to "fake" as default
  //   localeDetection: false
  // },
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname);
    config.module.rules.push({
      test: /\.po/,
      use: ['@lingui/loader'],
    })

    return config;
  }
});