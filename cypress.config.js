const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://gradebook.vivifyideas.com/",
    baseApiUrl: 'https://gallery-app.vivifyideas.com/',
    env: {
      existingUserEmail: "dragananikolic160685@gmail.com",
      validPassword: "pokusavam100"
    
    }
  },
})
