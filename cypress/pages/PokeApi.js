/// <reference types="cypress" />

export class PokeApi { 

    GetPokemonByName(pokemon){
        return cy.request('GET',`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    }
    
    GetPokemonById(Id){
        return cy.request('GET',`https://pokeapi.co/api/v2/pokemon/${Id}`)
    }
    
    

    
}