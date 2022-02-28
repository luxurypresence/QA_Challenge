import {Home} from "../pages/Home";
import {Navigation} from "../pages/Navigation"
import { Pokedex } from "../pages/Pokedex";

const home = new Home();
const navigate = new Navigation();
const pokemon = require("../fixtures/pokemonData.json");

const pokedex = new Pokedex();

const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()

Cypress.on('uncaught:exception', (err, runnable) => {
    debugger
    return false
})

describe('Dashboard',() => {

    beforeEach(()=> {
        home.GoToHomePage();
    });
    it('Go to Home',() => {
        navigate.HomeButton().click();
    }); 

    it('Navigate to the Pokedex and Search by Name', () => {

       navigate.PokedexButton().click();
       navigate.AcceptCookies().click();
       pokedex.SearchInput().type(pokemon.name + '{enter}');
       pokedex.PokemonCardName().should('contain.text',pokemon.name);
       pokedex.PokemonCard().click();
       cy.url().should('include', `us/pokedex/${normalizeText(pokemon.name)}`);
    });

    it('Navigate to the Pokedex and Sort by Highest Number (First)', () => {

        navigate.PokedexButton().click();
        navigate.AcceptCookies().click();
        pokedex.SortPokemonbtn().click();   
        pokedex.HighestNumberSort().click(); 
   
     });

     it('Verify Featured Pokemon', () => {
        navigate.HomeButton().click();
        navigate.AcceptCookies().click();
        cy.scrollTo(0,600);
        home.isFeatured(pokemon.Featured).should('have.class', 'highlight');             
     });

     it('Find Pokemon on Hover State', () => {
        navigate.HomeButton().click();
        navigate.AcceptCookies().click();
        cy.scrollTo(0,700);
        home.ExplreMorePokemon().click();     
        pokedex.SearchInput().type(pokemon.findName + '{enter}');
        pokedex.PokemonCard().click();
     });






});

