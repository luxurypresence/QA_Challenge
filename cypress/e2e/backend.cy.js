import { recurse } from 'cypress-recurse'

describe('QA_Challenge - API Automation Test', () => {
  it('Task 1 - Create a scenario and check status code OK', () => {
    cy.request('https://pokeapi.co/api/v2/pokemon/ditto').then((response) => {
      expect(response.status).to.eq(200, 'Check Status Code Success');
    });
  });
  it('Task 2 - Create a scenario and check status code Not Found', () => {
    cy.request({
      url: 'https://pokeapi.co/api/v2/pokemon-species/invalidPokemon'
      , failOnStatusCode: false
    })
      .then((response) => {
        expect(response.status).to.eq(404, 'Check Status Code Not Found');
      });
  });

  it('Task 3 - Create a scenario and check data results', () => {
    const name = 'pikachu'
    cy.request(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => {
        expect(response.status).to.eq(200, 'Check Status Code Success');
        expect(response.body.moves).to.exist;
        expect(response.body.height).to.be.eql(4);
        expect(response.body.name).to.be.eql(name);
      });
  });
  //TBD - ok...
  it.skip('Task 4 - Create an scenario that simulate create a new pokemon', () => {
    cy.fixture('pikachu').then(fixture => {
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts',
        failOnStatusCode: false,
        body: fixture,
        headers: {
          Authorization: 'ValidToken',
        },
      }).then((response) => {
        expect(response.status).to.eq(201, 'Created');
        expect(response.body).to.exist;
      });
    });
  });
  //TBD
  it.skip('Task 5 - Create an scenario that simulate create a login in a API : check if the create was successfull', () => {
    cy.request({
      method: 'POST',
      url: 'https://node-fake-api-server.herokuapp.com',
      failOnStatusCode: false,
      headers: {
        'X-Billtrust-Auth': `${Cypress.env('authenticationToken')}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      Cypress.env('token', response.body['accessToken']);
    });
  });
  //TBD
  it.skip('Task 6 - Create an scenario that simulate edit a login in a API : create a new scenario that check if the access was denied', () => {
    cy.request({
      method: 'POST',
      url: 'https://jsonplaceholder.typicode.com/posts',
      failOnStatusCode: false,
      body: 'test',
    }).then((response) => {
      expect(response.status).to.eq(201);
      Cypress.env('token', response.body['accessToken']);
    });
  });

  it('Task 7 - Create two requests on Pokemon API with two pokemons that you wish to choose, comparer results', () => {
    // Create a scenario where data result is the same (e.g. power of the pokemon)
    // Create a scenario where data result is not the same  (e.g. name of the pokemon)
    cy.request('https://pokeapi.co/api/v2/pokemon/bulbasaur').as('bulbasaur');
    cy.request('https://pokeapi.co/api/v2/pokemon/ivysaur').as('ivysaur');

    // Equal power
    cy.get('@bulbasaur').then(bulbasaur => {
      cy.get('@ivysaur').then(ivysaur => {
        expect(ivysaur.body.types[0].type.name).to.be.eql(bulbasaur.body.types[0].type.name)
        expect(ivysaur.body.types[1].type.name).to.be.eql(bulbasaur.body.types[1].type.name)
      })
    });

    // Not Equal height & Weight
    cy.get('@bulbasaur').then(bulbasaur => {
      cy.get('@ivysaur').then(ivysaur => {
        expect(ivysaur.body.height).not.to.be.eql(bulbasaur.body.height)
        expect(ivysaur.body.weight).not.to.be.eql(bulbasaur.body.weight)
      })
    });
  });
});