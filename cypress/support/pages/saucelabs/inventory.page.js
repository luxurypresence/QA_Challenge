import randomBetween from '../../helpers/randomBetween';

class InventoryPage {
  get itemNameElements() {
    return cy.get('.inventory_item_name');
  }

  get addToCartButtons() {
    return cy.get('.btn_inventory');
  }

  get shoppingCartButton() {
    return cy.get('.shopping_cart_link');
  }

  addRandomItemToShoppingCart() {
    let itemsLength;
    let selectedItem;

    this.itemNameElements.then((items) => {
      itemsLength = Cypress.$(items).length;
      selectedItem = randomBetween(itemsLength);

      this.addToCartButtons.eq(selectedItem).click();
      this.shoppingCartButton.click();
    });
  }
}

export default new InventoryPage();
