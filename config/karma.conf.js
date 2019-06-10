/**
 * Based on https://github.com/AngularClass/angular-starter/blob/master
 */

module.exports = function (config) {
  var testWebpackConfig = require("./webpack.test.js")({ env: "test" });

  var configuration = {
    basePath: "",
    frameworks: ["jasmine"],
    exclude: [],

    client: {
        captureConsole: true
    },

    /**
     * List of files / patterns to load in the browser, we are building the test environment in ./spec-bundle.js
     */
    files: [
      { pattern: "./config/spec-bundle.js", watched: false }
    ],

    /**
     * Preprocess matching files before serving them to the browser
     * available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
     */
    preprocessors: { "./config/spec-bundle.js": ["coverage", "webpack", "sourcemap"] },

    webpack: testWebpackConfig,

    coverageReporter: {
      type: "in-memory"
    },

    remapCoverageReporter: {
      "text-summary": null,
      json: "./code-coverage/coverage.json",
      html: "./code-coverage/html"
    },

    /**
     * Webpack suppress output
     */
    webpackMiddleware: {
      noInfo: true,
      stats: {
        chunks: false
      }
    },

    /**
     * Test results reporter to use.
     * Available reporters: https://npmjs.org/browse/keyword/karma-reporter
     */
    reporters: ["mocha", "coverage", "remap-coverage"],

    browsers: [
      "Chrome"
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_DEBUG,
    autoWatch: false,
    singleRun: true,
    failOnEmptyTestSuite: false
  };

  config.set(configuration);
};
