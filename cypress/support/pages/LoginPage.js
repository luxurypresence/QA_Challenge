/// <reference types="cypress" />

class LoginPage {
  constructor() {
    this.createAcct = "#user-account-signup";
  }

  doLogin(usr, pwd) {}

  createAccount() {
    cy.get(this.createAcct).click();
  }
}
export default LoginPage;
