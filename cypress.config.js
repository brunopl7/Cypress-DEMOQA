const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      config.env.PASSWORD = process.env.PASSWORD;
      return config;
    },
  },
});
