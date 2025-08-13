const dotenv = require('dotenv');
dotenv.config({ path: process.env.DOTENV_CONFIG_PATH });
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://localhost:3000',
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
      return config;
    },
  },
  retries: {
    runMode: parseInt(process.env.CYPRESS_RETRIES_RUN_MODE) || 2,
    openMode: parseInt(process.env.CYPRESS_RETRIES_OPEN_MODE) || 0,
  },
  viewportWidth: parseInt(process.env.CYPRESS_VIEWPORT_WIDTH) || 1366,
  viewportHeight: parseInt(process.env.CYPRESS_VIEWPORT_HEIGHT) || 850,
  video: process.env.CYPRESS_VIDEO ? process.env.CYPRESS_VIDEO === 'true' : true,
  screenshotsFolder: process.env.CYPRESS_SCREENSHOTS_FOLDER || 'cypress/screenshots',
  videosFolder: process.env.CYPRESS_VIDEOS_FOLDER || 'cypress/videos',
});
