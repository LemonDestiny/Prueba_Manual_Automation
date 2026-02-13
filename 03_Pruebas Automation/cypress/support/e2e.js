// This is a great place to put global configuration and
// behavior that modifies Cypress.
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.

// Import commands.js using ES2015 syntax:
Cypress.on('uncaught:exception', (err, runnable) => {
  // Retornar false evita que Cypress falle el test ante errores de la app
  return false;
});
import './commands';
import 'cypress-mochawesome-reporter/register';