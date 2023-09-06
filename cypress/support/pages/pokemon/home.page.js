class HomePage {
  get loginTab() {
    return cy.get('.sign-up');
  }
}

export default new HomePage();
