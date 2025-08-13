// Login tests using Page Object and Step Object patterns
import { LoginSteps } from '../steps/LoginSteps';
import { LoginPage } from '../pageObjects/LoginPage';

describe('Login', () => {
  const loginSteps = new LoginSteps();
  const loginPage = new LoginPage();

  beforeEach(() => {
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  it('logs in successfully with valid credentials (no cache)', () => {
    // Arrange
    cy.fixture('users').then(({ validUser }) => {
      loginSteps.login(validUser.username, validUser.password);

      cy.url().should('not.include', '/login');
    });
  });

  it('shows error on invalid credentials', () => {
    cy.fixture('users').then(({ invalidUser }) => {
      loginSteps.login(invalidUser.username, invalidUser.password);

      cy.url().should('include', '/login');
      loginPage.validateErrorVisible();
    });
  });
});
