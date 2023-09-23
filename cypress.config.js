const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  chromeWebSecurity: false,
  e2e: {
    baseUrl: "https://www.pokemon.com/us",
    defaultCommandTimeout: 10000,
    experimentalOriginDependencies: true,
    experimentalModifyObstructiveThirdPartyCode: false,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
