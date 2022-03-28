import HomePage from '../../page_objects/home_page'
import PokedexPage from '../../page_objects/pokedex_page'

describe('Home Page Tests', () =>{

    it('can scroll through highlights', () =>{
      let pokemon_name = "Minccino";
      HomePage.scroll_highlights_until_pokemon(pokemon_name);
      HomePage.page_elements.highlighted_pokemon_by_name(pokemon_name).should('exist')
    });

    it('can navigate to pokedex from homepage scroll to Jigglypuff and hover over', () =>{
      let pokemon_name = "Jigglypuff";
      HomePage.click_explore_more_pokemon();
      PokedexPage.click_load_more_pokemon();
      PokedexPage.scroll_until_pokemon(pokemon_name);
      PokedexPage.hover_over_pokemon(pokemon_name);
      PokedexPage.get_pokemon_icon_by_name(pokemon_name).should('exist')
    });
  
  });
