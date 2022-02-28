import {Home} from "../pages/Home";
import {Navigation} from "../pages/Navigation"
import { Pokedex } from "../pages/Pokedex";
import { PokeApi } from "../pages/PokeApi"

const home = new Home();
const navigate = new Navigation();
const pokemon = require("../fixtures/pokemonData.json");
const pokeapi = new PokeApi();

const pokedex = new Pokedex();

const normalizeText = (s) => s.replace(/\s/g, '').toLowerCase()

Cypress.on('uncaught:exception', (err, runnable) => {
    debugger
    return false
})

describe('API Testing',() => {
    it.only('GET pokemon request status', () => {
        pokeapi.GetPokemonByName(normalizeText(pokemon.findName)).then((response) => {
            expect(response).to.have.property('status', 200);
        })        
    });

    it.only('GET: pokemon body request not Null', () => {
        pokeapi.GetPokemonByName(normalizeText(pokemon.findName)).then((response) => {
            expect(response.body).to.not.be.null
        })         
    });

    it.only('GET: Pokemon Id By Name', () => {
        pokeapi.GetPokemonByName(normalizeText(pokemon.findName))
            .its('body')
            .should('include', {id: pokemon.Id})
           
    });

    it.only('GET: Pokemon Name By Id', () => {
        pokeapi.GetPokemonById(pokemon.FindId)
            .its('body')
            .should('include', {name: normalizeText(pokemon.findName)});
           
    });


});

