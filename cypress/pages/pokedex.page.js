import BasePage from "./base.page";

class PokedexPage extends BasePage {
    get headerPokedex() {
        return cy.get('h1')
    }

    get searchInput() {
        return cy.get('#searchInput')
    }

    get searchBtn() {
        return cy.get('input#search')
    }

    get searchResults() {
        return cy.get('.results h5')
    }

    get sortOrderBtn() {
        return cy.get('.push-1 .custom-select-menu')
    }

    get sortNumberDesc() {
        return cy.get('.push-1 .custom-select-menu ul :nth-child(3)')
    }

    get sortResults() {
        return cy.get('.id')
    }

    get loadMorePokemonBtn() {
        return cy.get('#loadMore .button-lightblue')
    }

    searchByName(text) {
        this.searchInput.should('be.visible').type(text);
        this.searchBtn.should('be.enabled').click();
        this.acceptCookies.click({force: true});
        this.searchBtn.should('be.enabled').click();
        cy.wait(1000);
        this.searchResults.should('not.be.empty')
            .and('have.text', text);
    }

    sortByHighestNumber() {
        this.sortOrderBtn.click();
        this.sortNumberDesc.click();
        this.acceptCookies.click({force: true});
        this.sortResults.eq(0).should("contain.text", '905')
    }

    loadMorePokemons() {
        this.loadMorePokemonBtn.scrollIntoView().should('be.visible');
        this.loadMorePokemonBtn.should('exist').click();
    }

    scrollToAndFindPokemonByName(pokemonName) {
        cy.waitUntil(() => {
            if (!Cypress.$(`[href="/us/pokedex/${pokemonName.toLowerCase()}"]`).length) {
                return cy.scrollTo('bottom').then(() => false);
            } else {
                return true;
            }
        });
        cy.get(`[href="/us/pokedex/${pokemonName.toLowerCase()}"]`)
            .should('exist');
    }

    open() {
        return super.open('/pokedex');
    }
}

export default new PokedexPage();
