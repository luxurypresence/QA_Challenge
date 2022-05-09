import BasePage from "./base.page";

class HomePage extends BasePage {
    get iconPokedex() {
        return cy.get('li.explore')
    }

    get featuredPokemonNextBtn() {
        return cy.get('.nav-btn.next')
    }

    get exploreMorePokemonBtn() {
        return cy.get('.button.button-black.right')
    }

    featuredPokemonClickNext() {
        return this.featuredPokemonNextBtn.click();
    }

    exploreMorePokemonClick() {
        return this.exploreMorePokemonBtn.click();
    }

    verifyFeaturedPokemon(pokemonName) {
        cy.waitUntil(() => {
            if (!Cypress.$(`.loaded.highlight [title="${pokemonName}"]`).length) {
                return this.featuredPokemonClickNext().then(() => false);
            } else {
                return true;
            }
        });
        cy.get(`.loaded.highlight [title="${pokemonName}"]`)
            .should('exist');
    }

    verifyPokemonInfo() {
        cy.intercept({method: 'GET', url: '**kalos'}).as('kalos')
        cy.wait('@kalos')
        cy.get('@kalos').should('not.be.null').then(({response}) => {
            const pokemonName = response.body[8].name;
            let pokemonTypeOne = response.body[8].type[0];
            pokemonTypeOne = pokemonTypeOne.slice(0, 1).toUpperCase() + pokemonTypeOne.slice(1);
            let pokemonTypeTwo = response.body[8].type[1];
            pokemonTypeTwo = pokemonTypeTwo.slice(0, 1).toUpperCase() + pokemonTypeTwo.slice(1);
            cy.get('.results :nth-child(6) h5').should('be.visible')
                .and('have.text', `${pokemonName}`);
            cy.get('.results :nth-child(6) .abilities').first().should('exist')
                .and('contain.text', `${pokemonTypeOne}`);
            cy.get('.results :nth-child(6) .abilities').eq(1).should('exist')
                .and('contain.text', `${pokemonTypeTwo}`);
        })
    }

    open() {
        return super.open('/');
    }
}

export default new HomePage();
