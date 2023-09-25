/// <reference types="cypress" />

class PokedexPage {
  constructor() {
    this.searchInput = "#searchInput";
    this.searchBtn = "#search";
  }

  searchPokemon(pokemon) {
    cy.get(this.searchInput).should('be.enabled');
    cy.get(this.searchInput).type(pokemon); //flaky
    cy.get(this.searchBtn).click();
  }

  validatePokemonFound(pokemon) {
    cy.get("li").contains(pokemon).should("be.visible").and("have.length", 1);
  }
}
export default PokedexPage;
