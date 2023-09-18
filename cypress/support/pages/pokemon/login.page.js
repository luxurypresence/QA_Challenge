class LoginPage {
  get createAnAccountButton() {
    return cy.get('#user-account-signup');
  }
}

export default new LoginPage();
