// E2E: login -> navigate to depreciation -> calculate -> validate
import { ResidualValuePage } from '../pageObjects/ResidualValuePage';
import { LoginPage } from '../pageObjects/LoginPage';

describe('Depreciation Model', () => {
  const residualValuePage = new ResidualValuePage();

  beforeEach(() => {
    cy.login();
  });

  it('calculates residual value for single bike by EVL', function () {
    cy.fixture('depreciation').then(({ singleContractIdCase }) => {
        residualValuePage.navigateToResidualValue()
        .inputContractId(singleContractIdCase.input)
        .triggerCalculation();
        residualValuePage.validateOutput(singleContractIdCase.expected.expectedTitle, singleContractIdCase.expected.expectedTotal);
    });
  });
});
