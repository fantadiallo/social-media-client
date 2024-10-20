const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      config.defaultCommandTimeout = 10000; // Set the timeout to 10 seconds
      return config; 
    },
  },
});
