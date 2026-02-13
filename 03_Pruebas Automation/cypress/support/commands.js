
Cypress.Commands.add('loginUI', (user, pass) => {
  cy.get('.nav.navbar-nav').contains("Signup / Login").click(); 
  cy.get('[data-qa="login-email"]', { timeout: 10000 }).type(user, { delay: 0 }); 
  cy.get('[data-qa="login-password"]').type(pass, { delay: 0 });
  cy.get('[data-qa="login-button"]').click();
});
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })