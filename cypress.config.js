const { defineConfig } = require("cypress");

module.exports = defineConfig({
  component: {
		devServer: {
			framework: 'create-react-app',
			bundler: 'webpack',
		},
    setupNodeEvents(on, config) {},
    specPattern: "src/**/*.test.{js, jsx, ts, tsx}",
  },

  e2e: {
		baseUrl: "http://localhost:3000",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
