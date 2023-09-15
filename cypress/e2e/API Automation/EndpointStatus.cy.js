describe('Endpoint status validation', () => {
    it('Status of the overall API', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2').then((response) => {
          expect(response.status).to.equal(200);
        });
    });

    it('Status of Pokemon endpoint', () => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
            // Assertions on the response
            expect(response.status).to.equal(200);
          });
      });
  });
  