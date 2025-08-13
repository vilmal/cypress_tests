import { LoginSteps } from '../steps/LoginSteps';

// Custom reusable commands
// Login command uses fixtures for credentials by default unless overridden
Cypress.Commands.add('login', (username, password) => {
  const steps = new LoginSteps();

  if (username && password) {
    cy.session([username], () => {
      steps.login(username, password);
      cy.url().should('not.include', '/login');
    });
  } else {
    cy.fixture('users.json').then(({ validUser }) => {
      const { username: u, password: p } = validUser;
      cy.session([u], () => {
        steps.login(u, p);
        cy.url().should('not.include', '/login');
      });
    });
  }
});

// Add any other reusable commands here
