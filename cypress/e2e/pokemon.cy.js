describe('Luxury Presence QA Challenge', () => {
  beforeEach(() => {
    cy.openPokemonWebsite();
  });

  it('Create a new Account', () => {
    cy.createNewAccount();
  });
});
