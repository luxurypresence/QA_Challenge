class CheckoutPage {
  get firstNameInput() {
    return cy.get('#first-name');
  }

  get lastNameInput() {
    return cy.get('#last-name');
  }

  get zipCodeInput() {
    return cy.get('#postal-code');
  }

  get continueButton() {
    return cy.get('.btn_primary');
  }

  get itemNameElement() {
    return cy.get('.inventory_item_name');
  }

  get finishbutton() {
    return cy.get('.btn_action');
  }

  get completeHeaderElement() {
    return cy.get('.complete-header');
  }

  completeCheckoutInformation() {
    this.firstNameInput.type('Jon');
    this.lastNameInput.type('Doe');
    this.zipCodeInput.type('12901');
    this.continueButton.click();
  }

  verifyElementOnCheckoutAndFinish() {
    this.finishbutton.click();

    this.completeHeaderElement
      .invoke('text')
      .should('eq', 'THANK YOU FOR YOUR ORDER');
  }
}

export default new CheckoutPage();
