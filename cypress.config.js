const { defineConfig } = require("Cypress");

module.exports = defineConfig({
  screenshotsFolder: 'cypress/reports/mochareports/assets',
  projectId: 't5ptpj',
  "reporter": "cypress-multi-reporters",
  "reporterOptions": {
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions": {
      "reportDir": "cypress/reports/mocha",
      "quiet": true,
      "overwrite": false,
      "html": false,
      "json": true
    }
  },
  screenshotOnRunFailure: true,
  video:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on, config);
    },
    video: true,
    baseUrl: 'https://www.google.com/'
  }
});


