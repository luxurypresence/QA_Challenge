const { defineConfig } = require("cypress");


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'cypress/results',
    embeddedScreenshots: true,
    saveAllAttempts: true,
    charts: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      config.requestTimeout = 50000
      config.responseTimeout = 90000
      config.pageLoadTimeout = 50000
      config.defaultCommandTimeout = 10000
      config.baseUrl = 'https://www.pokemon.com/us'
      config.viewportWidth = 1920
      config.viewportHeight =  1080
      config.chromeWebSecurity = false
      config.video = false
      return config
    },
  },
});
 