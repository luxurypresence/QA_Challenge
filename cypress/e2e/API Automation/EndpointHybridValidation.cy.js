describe('Endpoint status validation', () => {

  beforeEach(() => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').as("response");
  });


    it('Validate partial data structure', () => {
      cy.get("@response").then((response) => {
      expect(response.body).to.have.property("abilities").and.to.be.an("array");
      expect(response.body).to.have.property("base_experience").and.to.be.a("number");
      expect(response.body).to.have.property("forms").and.to.be.an("array");
      expect(response.body).to.have.property("game_indices").and.to.be.an("array");

      // Validate the abilities array
      expect(response.body.abilities).to.have.length(2);
      expect(response.body.abilities[0]).to.deep.equal({
        ability: {
          name: "limber",
          url: "https://pokeapi.co/api/v2/ability/7/",
        },
        is_hidden: false,
        slot: 1,
      });
      
        });
    });

    it('Validate endpoint status', () => {
      cy.get("@response").then((response) => {
        expect(response.status).to.equal(200);

        });
    });
    
  });
  