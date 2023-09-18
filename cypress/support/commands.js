Cypress.Commands.add('openPokemonWebsite', () => {
  cy.visit(Cypress.env('baseUrl'));
  cy.get('#onetrust-accept-btn-handler').click();
});
