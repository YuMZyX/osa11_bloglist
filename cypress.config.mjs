import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: '41grhw',
  video: false,
  e2e: {
    setupNodeEvents(on, config) { // eslint-disable-line no-unused-vars
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3003',
    env: {
      BACKEND: 'http://localhost:3003/api',
    },
  },
})
