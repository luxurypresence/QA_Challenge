import HomePage from "../pages/home.page";

it('should status code be 200', function () {
    HomePage.open();
    //HomePage.acceptCookies.click({force: true});
    cy.intercept({method: 'GET', url: '**api/users/details?*'}).as('details')
    cy.wait('@details');
    cy.get('@details').should('not.be.null').then(({response}) => {
        expect(response.statusCode).to.eq(200);
        expect(response.statusMessage).to.eq('OK');
    })
});

it('should status code be 404 for wrong page', function () {
    cy.request({
        url: 'https://www.pokemon.com/us/pokedex/flaafffy',
        failOnStatusCode: false,
    }).then((response) => {
        expect(response.status).to.eq(404);
    })
})

it('should get data about Wartortle pokemon', function () {
    HomePage.open();
    HomePage.iconPokedex.click();
    cy.url().should('include', '/pokedex');
    cy.intercept({method: 'GET', url: '**kalos'}).as('kalos')
    cy.wait('@kalos')
    cy.get('@kalos').should('not.be.null').then(({response}) => {
        const listPokemon = response.body;
        expect(listPokemon[12].name).to.eq('Wartortle')
        expect(listPokemon[12].number).to.eq('008')
        expect(listPokemon[12].abilities[0]).to.eq('Torrent');
    })
});

it('should simulate create a new pokemons by mock data and verify names', function () {
    HomePage.open();
    HomePage.iconPokedex.click();
    cy.url().should('include', '/pokedex');
    cy.intercept({method: 'GET', url: '**kalos'}, {fixture: 'pokemonMockData.json'}).as('kalos')
    cy.wait('@kalos');
    cy.get('@kalos').should('not.be.null').then(({response}) => {
        expect(response.statusCode).to.eq(200);
        const listPokemon = response.body;
        expect(listPokemon[0].name).to.eq('Inkay')
        expect(listPokemon[1].name).to.eq('Malamar')
        expect(listPokemon[2].name).to.eq('Binacle')
    })
});

it('should verify that power of  Wartortle and Megaton not equal', function () {
    HomePage.open();
    HomePage.iconPokedex.click();
    cy.url().should('include', '/pokedex');
    cy.intercept({method: 'GET', url: '**kalos'}).as('kalos')
    cy.wait('@kalos')
    cy.get('@kalos').should('not.be.null').then(({response}) => {
        const abilitiesWartortle = response.body[12].abilities[0];
        const abilitiesMetadon = response.body[17].abilities[0];
        expect(abilitiesWartortle).not.eq(`${abilitiesMetadon}`);
        cy.log(abilitiesWartortle);
        cy.log(abilitiesMetadon);
    })
});
