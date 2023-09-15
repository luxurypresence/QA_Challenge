describe('Endpoint status validation', () => {

    it('Validate partial data structure', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0').then((response) => {
      
      // Validate the JSON structure
      expect(response.body).to.have.property("count").and.to.be.a("number");
      expect(response.body).to.have.property("next").and.to.be.null;
      expect(response.body).to.have.property("previous").and.to.be.null;
      expect(response.body).to.have.property("results").and.to.be.an("array");

      // Validate the values within the "results" array
      const results = response.body.results;

      // Validate the first 4 Pokemon names
      expect(results[0].name).to.equal("bulbasaur");
      expect(results[1].name).to.equal("ivysaur");
      expect(results[2].name).to.equal("venusaur");
      expect(results[3].name).to.equal("charmander");


        });
    });

    
  });
  