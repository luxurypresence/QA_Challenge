/// <reference types="cypress" />

export class Home { 

    GoToHomePage(){
        cy.visit('/');      
    }

    isFeatured(name){
        return cy.xpath(`(//*[contains(text(),'${name}')]//ancestor::li)[1]`);
    }

    ExplreMorePokemon(){
        return cy.get('.content-block > .button');
    }
    

    
}