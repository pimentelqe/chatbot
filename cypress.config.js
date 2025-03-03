const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:36000',
    viewportWidth:1920,
    viewportHeight:1080,
    defaultCommandTimeout: 4000
  },
});
