/// <reference types="cypress" />

import CommonPage from "./CommonPage";

class HomePage extends CommonPage {
  constructor() {
    super()
    this.menu = '[data-analytics-label="primary-nav"]';
    this.aceptCookies = "#onetrust-accept-btn-handler";
    this.articles = ".title-image-wrapper";
  }

  acceptCookies() {
    cy.get(this.aceptCookies).click();
  }

  validateArticlesLoaded() {
    cy.get(this.articles).should("have.have.length.greaterThan", 0);
  }

  goToPokedexTab() {
    cy.get(this.menu).find('.explore').click()
  }

  goToVideogamesTab() {
    cy.get(this.menu).find('.watch').click()
  }

  goToTradingCardsTab() {
    cy.get(this.menu).find('.play').click()
  }

  goToPokemonTV() {
    cy.get(this.menu).find('.attend').click()
  }
}
export default HomePage;
