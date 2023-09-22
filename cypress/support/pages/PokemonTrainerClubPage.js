/// <reference types="cypress" />

class PokemonTrainerClubPage {
  constructor() {
    this.datePicker = "#id_dob";
    this.datePicker = "#id_dob";
    this.countrySelect = "#id_country";
    this.continueBtn = ".continue-button";

    this.year = ".year";
    this.month = ".month";
    this.day = ".picker__day";
  }

  doLogin(usr, pwd) {}

  createAccount() {
    cy.get(this.createAcct).click();
  }

  pickBirthDate(date) {
    const m = date.split("/")[0];
    const d = date.split("/")[1];
    const y = date.split("/")[2];

    cy.get(this.datePicker).click();

    cy.get(this.month).parent().click();
    cy.get(`[data-option-value=${m - 1}]`).click();

    cy.get(this.year).parent().click();
    cy.get(`[data-option-value=${y}]`).click();

    cy.get(this.day).contains(d).click();
    cy.contains("Confirm").click();
  }

  selectCountry(country) {
    cy.get(this.countrySelect).parent().click();
    cy.get('[data-select-name="country"]').find("li").contains(country).click();
  }

  continue() {
    cy.get(this.continueBtn).click();
  }

  validateCompleteAcctForm() {
    cy.contains("Pokémon Website Terms of Use").should("be.visible");
  }
}
export default PokemonTrainerClubPage;
