const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  e2e: {
    baseUrl: "http://localhost:4200/",
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    excludeSpecPattern: ["**/1-gettings-started", "**/2-advanced-examples"],
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
