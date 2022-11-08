import { defineConfig } from "cypress";

export default defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  requestTimeout: 20000,
  e2e: {
    // baseUrl: 'https://prisma-it.tst.prisma-it.com/usermanager:authentication/login',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
});
