/// <reference types="cypress" />

class CommonPage {
  constructor() {}

  goToLogin() {
    cy.contains("Log In").click({ force: true });
  }

  visitHomePage(){
    cy.visit("/", {
      headers: {
        Accept: "application/json, text/plain, */*",
        "User-Agent": "axios/0.18.0",
      },
    });
  }
}

export default CommonPage;
