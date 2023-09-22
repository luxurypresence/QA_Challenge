/// <reference types="cypress" />

var menu = '[data-analytics-label="primary-nav"]';
var aceeptCookies = "#onetrust-accept-btn-handler";
var createAcct = "#user-account-signup";
var searchInput = "#searchInput";

var datePicker = "#id_dob";
var countrySelect = "#id_country";
var continueBtn = ".continue-button";

var year = ".year";
var month = ".month";
var day = ".picker__day";

describe("Accounts", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.get(aceeptCookies).click();
  });

  it("Create account", () => {
    cy.get(menu).find(".explore").click();
    cy.contains("Log In").click({ force: true });
    cy.get(createAcct).click();

    cy.get(datePicker).click();
    pickBirthDate("5/24/1989");
    selectCountry("Peru");

    cy.get(continueBtn).click();

    cy.contains("Pokémon Website Terms of Use").should("be.visible");
  });

  it("Search Pokemon", () => {
    const pokemon = "Pikachu";
    cy.get(menu).find(".explore").click();
    cy.get(searchInput).type(pokemon);
    cy.get("li").contains(pokemon).should("be.visible").and("have.length", 1);
  });

  function pickBirthDate(date) {
    const m = date.split("/")[0];
    const d = date.split("/")[1];
    const y = date.split("/")[2];

    cy.get(month).parent().click();
    cy.get(`[data-option-value=${m - 1}]`).click();

    cy.get(year).parent().click();
    cy.get(`[data-option-value=${y}]`).click();

    cy.get(day).contains(d).click();
    cy.contains("Confirm").click();
  }

  function selectCountry(country) {
    cy.get(countrySelect).parent().click();
    cy.get('[data-select-name="country"]').find("li").contains(country).click();
  }
});
