export class LoginPage {
  selectors = {
    openLogin: '[data-testid=auth-layout] button',
    username: '[data-test=username]',
    password: '[data-test=password]',
    submit: '[data-test=login-submit]',
    errorBanner: '[data-test=error-banner]',
  };

  URL = '/auth/login';

  visit() {
    cy.visit(this.URL);
    return this;
  }

  openLoginPage() {
    cy.get(this.selectors.openLogin).eq(0).click();
    return this;
  }
  
  fillUsername(username) {
    cy.get(this.selectors.username).clear().type(username);
    return this;
  }

  fillPassword(password) {
    cy.get(this.selectors.password).clear().type(password, { log: false });
    return this;
  }

  submit() {
    cy.get(this.selectors.submit).click();
    return this;
  }

  validateErrorVisible() {
    cy.get(this.selectors.errorBanner).should('be.visible');
    return this;
  }
}
