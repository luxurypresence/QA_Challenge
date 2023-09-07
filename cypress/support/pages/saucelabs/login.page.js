class LoginPage {
  get usernameInput() {
    return cy.get('#user-name');
  }

  get passwordInput() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('#login-button');
  }

  loginIntoSystemWith(user) {
    cy.fixture('users').then((users) => {
      this.usernameInput.type(users[user].email);
      this.passwordInput.type(users[user].password);
      this.loginButton.click();
    });
  }
}

export default new LoginPage();
