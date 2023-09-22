/// <reference types="cypress" />

class PokedexPage {
  constructor() {
    this.searchInput = "#searchInput";
  }

  searchPokemon(pokemon) {
    cy.get(this.searchInput).type(pokemon);
  }

  validatePokemonFound(pokemon) {
    cy.get("li").contains(pokemon).should("be.visible").and("have.length", 1);
  }
}
export default PokedexPage;
