describe('API Tests', () =>{

    it('checks availability of used name results and data', () =>{

        let res
        cy.request('POST', 'https://club.pokemon.com/api/signup/verify-username', { name: 'audioleaf' }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.inuse).to.eq(true);
        })
    });

    it('checks availability of unused name results and data', () =>{

        cy.request('POST', 'https://club.pokemon.com/api/signup/verify-username', { name: 'audioleaf!@#$#' }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.inuse).to.eq(false);
        })
    });

    it('checks for bad status code', () =>{

        cy.request({
            method: 'POST',
            url: 'https://club.pokemon.com/api/signup/verify-username',
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.eq(403);
        })
    });

    

  it('fakes new pokemon creation', () =>{
    let new_pokemon_name = "VeeVee";
    cy.intercept('GET','/us/pokedex', {
        statusCode: 200,
        body: `New Pokemon: ${new_pokemon_name} created`,
        headers: {
            'content-type': 'text/html'
        },
      }).as('createpokemon');

    cy.visit("https://www.pokemon.com/us/pokedex/");
    cy.wait('@createpokemon').its('response.statusCode').should('eq', 200);
        
    cy.contains(`New Pokemon: ${new_pokemon_name} created`).should('be.visible')


  });

  it('compare pokemon with same ability name', () =>{

    let move_1_name;
    let move_2_name;
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => {
        expect(response.status).to.eq(200);
        move_1_name = response.body.moves[0].move.name;
    }).then(() => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/hitmonchan').then((response) => {
            expect(response.status).to.eq(200);
            move_2_name = response.body.moves[1].move.name;
            expect(move_1_name).to.eq(move_2_name);

        });

    });
});

it('compare pokemon with different ability name', () =>{

    let move_1_name;
    let move_2_name;
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/pikachu').then((response) => {
        expect(response.status).to.eq(200);
        move_1_name = response.body.moves[1].move.name;
    }).then(() => {
        cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/hitmonchan').then((response) => {
            expect(response.status).to.eq(200);
            move_2_name = response.body.moves[3].move.name;
            expect(move_1_name).to.not.eq(move_2_name);

        });

    });
});



});

