class CartPage {
  get itemNameElement() {
    return cy.get('.inventory_item_name');
  }

  get checkoutButton() {
    return cy.get('.btn_action');
  }

  verifyElementOnCartAndContinueToCheckout() {
    this.checkoutButton.click();
  }
}

export default new CartPage();
