const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,               
    reportPageTitle: 'Mi Reporte de Pruebas',
    embeddedScreenshots: true,  
    inlineAssets: true,},
    allowCypressEnv: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    blockHosts: ["*google-analytics.com", "*googlesyndication.com", "*googleadservices.com"],
  
  },
});
