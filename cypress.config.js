import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "s76yec",

  e2e: {
    baseUrl: 'http://localhost:4000', //local
    // baseUrl: "http://192.168.43.186:4000", //network
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "webpack",
    },
  },
});
