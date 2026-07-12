const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',

  // Increase overall test timeout to 2 minutes
  timeout: 120 * 1000,

  // Optional: Expect assertions timeout
  expect: {
    timeout: 10 * 1000,
  },

  // Add this section
  reporter: [
    ['list'],
    ['html'],
    ['allure-playwright']
  ],

  use: {
    headless: false,

    // Delay every Playwright action by 1 second
    launchOptions: {
      slowMo: 1000,
    },

    // Maximum time for each action
    actionTimeout: 30 * 1000,

    // Maximum time for page navigation
    navigationTimeout: 60 * 1000,

    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});