/// <reference types="cypress" />

import HomePage from "../../support/pages/HomePage";
import LoginPage from "../../support/pages/LoginPage";
import PokemonTrainerClubPage from "../../support/pages/PokemonTrainerClubPage";
import PokedexPage from "../../support/pages/PokedexPage";

const homePage = new HomePage
const loginPage = new LoginPage();
const pTrainerClubPage = new PokemonTrainerClubPage();
const pokedexPage = new PokedexPage();

describe("Accounts", () => {
  beforeEach(() => {
    cy.visit("/");
    homePage.acceptCookies();
  });

  it("Create account", () => {
    homePage.goToPokedexTab();
    homePage.goToLogin();

    loginPage.createAccount();

    pTrainerClubPage.pickBirthDate("5/24/1989");
    pTrainerClubPage.selectCountry("Peru");
    pTrainerClubPage.continue();

    pTrainerClubPage.validateCompleteAcctForm();
  });

  it("Search Pokemon", () => {
    const pokemon = "Pikachu";
    homePage.goToPokedexTab();
    pokedexPage.searchPokemon(pokemon);
    pokedexPage.validatePokemonFound(pokemon);
  });
});
