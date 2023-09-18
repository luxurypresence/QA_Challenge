class HomePage {
  visit() {
    cy.visit('https://www.saucedemo.com/v1/');
  }
}

export default new HomePage();
