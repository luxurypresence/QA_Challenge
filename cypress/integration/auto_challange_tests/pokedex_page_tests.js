import PokedexPage from '../../page_objects/pokedex_page'

describe('Pokedex Page Tests', () =>{

  beforeEach(() => {

    cy.visit('https://www.pokemon.com/us/pokedex/')

  })

  it('should search and find valid pokemon by name', () =>{
    const pokemon_name = "Haunter";
    PokedexPage.search_pokedex(pokemon_name);
    PokedexPage.page_elements.search_result_by_name().should('have.text', pokemon_name);

  });

  it('can sort by highest pokemon id', () =>{
    PokedexPage.sort_pokedex_by_highest_id();
    PokedexPage.page_elements.search_result_by_name().first().should('have.text', 'Calyrex');

  });

});

