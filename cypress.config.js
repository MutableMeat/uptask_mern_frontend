const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "8dcuy8",
  e2e: {
    baseUrl: "http://localhost:3000/",
    viewportWidth: 1200,
    viewportHeight: 1200,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
