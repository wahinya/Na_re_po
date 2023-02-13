const { defineConfig } = require("cypress","cypress-xpath");
module.exports = defineConfig({
  env: {
    base:'https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
