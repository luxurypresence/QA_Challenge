/// <reference types="cypress" />

export class Pokedex { 

    SearchInput(){
       return cy.get('#searchInput');    
    }

    PokemonCard(){
        return cy.get('figure').first();
    }

    PokemonCardName(){
        return cy.xpath("//div[contains(@class,'pokemon-info')]//following::h5");
    }

    SortPokemonbtn(){
        return cy.get('.column-12 > .custom-select-wrapper > .custom-select-menu > .styled-select');
    }

    HighestNumberSort(){
        return cy.get('[data-option-value="numberDesc"]');
    }


    
}