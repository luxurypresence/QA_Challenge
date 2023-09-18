describe('Luxury Presence QA Challenge - Pokemon', () => {
  beforeEach(() => {
    cy.openPokemonWebsite();
  });

  it('Create a new Account', () => {
    cy.createNewAccount();
  });
});
