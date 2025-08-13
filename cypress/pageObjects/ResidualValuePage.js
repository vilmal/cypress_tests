export class ResidualValuePage {
  selectors = {
    residualValueLink: '[data-testid=sidebar-component] ul li:nth-child(1)',

    // Inputs
    contractId: '[data-testid=residual-value-contract-form--contract-id-input]',

    // Actions
    calculateBtn: '[data-testid=residual-value-contract-form--submit]',

    // Output
    resultTitle: '[data-testid=page-title] div h1',
    resultTotal: '[data-testid=page-title] div:nth-child(1)',
    errorBanner: '[data-test=error-banner]',
  };

  URL = '/residual-value/select';

  navigateToResidualValue() {
    cy.get(this.selectors.residualValueLink).click();
    cy.url().should('include', this.URL);
    return this;
  }

  inputContractId({ contractId }) {
    cy.get(this.selectors.contractId).clear().type(String(contractId));
    return this;
  }

  triggerCalculation() {
    cy.get(this.selectors.calculateBtn).click();
    return this;
  }

  validateOutput( expectedTitle, expectedTotal ) {
    cy.get(this.selectors.resultTitle).should('contain', String(expectedTitle));
    cy.get(this.selectors.resultTotal).should('contain', String(expectedTotal));
    return this;
  }
}
