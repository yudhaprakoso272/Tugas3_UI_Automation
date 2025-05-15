const { defineConfig } = require("cypress");
const dotenv = require('dotenv');
dotenv.config();

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',

    env: {
      ...process.env
    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
