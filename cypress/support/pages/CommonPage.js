/// <reference types="cypress" />

class CommonPage {
  constructor() {}

  goToLogin() {
    cy.contains("Log In").click({ force: true });
  }
}

export default CommonPage;
