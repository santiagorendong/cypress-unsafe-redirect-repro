import { defineConfig } from 'cypress';

export default defineConfig({
  chromeWebSecurity: false,
  modifyObstructiveCode: true,
  e2e: {
    baseUrl: 'https://www.google.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
