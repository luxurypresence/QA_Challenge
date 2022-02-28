/// <reference types="cypress" />

export class Navigation { 

    HomeButton(){
        return cy.get('.home > a');
    }

    PokedexButton(){
        return cy.get('.explore > a');
    }

    AcceptCookies(){
        return cy.get('#onetrust-accept-btn-handler');
    }

    CloseCookiesMessage(){
        return cy.get('#onetrust-close-btn-container > .onetrust-close-btn-handler');
    }  
}