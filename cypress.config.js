const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8dcuy8",
  e2e: {
    baseUrl: "http://localhost:3000/",
    viewportWidth: 1000,
    viewportHeight: 1000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
