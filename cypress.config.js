const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: "https://demoqa.com/",
    /**
     * Injects the PASSWORD environment variable from .env into Cypress's
     * env config so it can be read via `cy.env('PASSWORD')` in tests.
     *
     * @param {Cypress.PluginEvents} on
     * @param {Cypress.PluginConfigOptions} config
     * @returns {Cypress.PluginConfigOptions}
     */
    setupNodeEvents(on, config) {
      config.env.PASSWORD = process.env.PASSWORD;
      return config;
    },
  },
});
