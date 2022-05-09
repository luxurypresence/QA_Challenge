import HomePage from "../pages/home.page";
import PokedexPage from "../pages/pokedex.page";

describe('TEST HOME PAGE', () => {
    beforeEach('should land on pokemon website', () => {
        HomePage.open();
        HomePage.acceptCookies.click({force: true});
    });

    it('should verify Absol in the Featured Pokemon Gallery', function () {
        // no Dewott exists in the Featured Pokemon Gallery
        HomePage.verifyFeaturedPokemon('Absol');
    });

    it('should verify find Jiggly puff By selecting Explore More Pokemon', function () {
        HomePage.exploreMorePokemonClick();
        PokedexPage.loadMorePokemons();
        PokedexPage.scrollToAndFindPokemonByName('Jigglypuff');
    })

    it('should verify name and types about Charizard pokemon', function () {
        HomePage.exploreMorePokemonClick();
        HomePage.verifyPokemonInfo();
    });
})
