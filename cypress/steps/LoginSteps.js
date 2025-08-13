import { LoginPage } from '../pageObjects/LoginPage';

export class LoginSteps {
  login(username, password) {
    const loginPage = new LoginPage();
    loginPage.visit()
    .openLoginPage()
    .fillUsername(username)
    .fillPassword(password)
    .submit();
  }
}
