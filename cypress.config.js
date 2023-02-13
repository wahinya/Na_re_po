const { defineConfig } = require("cypress","cypress-xpath");
module.exports = defineConfig({
  
    "reporter": "mochawesome",
   "reporterOptions": {
     "charts": true,
     "overwrite": false,
     "html": false,
     "json": true,
     "reportDir": "cypress/report/mochawesome-report"
    },
  
  env: {
    base:'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
