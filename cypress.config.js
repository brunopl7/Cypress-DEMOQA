const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://demoqa.com/",
    setupNodeEvents(on, config) {
      config.env.PASSWORD = process.env.PASSWORD;
      return config;
    },
  },
});
