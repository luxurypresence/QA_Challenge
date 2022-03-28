class HomePage{

    
    page_elements = {
        page_url: 'https://www.pokemon.com/us/',
        highlighted_pokemon_by_name: (name) => cy.get(`.loaded.highlight [title="${name}"]`),
        highlighted_pokemon: () => cy.get(".loaded.highlight .block-link"),
        explore_more_pokemon_button: () => cy.get(".button.button-black"),
        next_highlighted_pokemon_button: () => cy.get('.nav-btn.next')
    }

    // Locator Functions
    click_explore_more_pokemon(){
        this.visit()
        return this.page_elements.explore_more_pokemon_button().click();
    }

    click_next_highlight(){
        return this.page_elements.next_highlighted_pokemon_button().click();
    }

    // Page functions
    visit(){
        cy.url().then(($url) => {
            if(!$url.includes(this.page_elements.page_url)) {
                cy.visit(this.page_elements.page_url)
            }
        });
    }

    get_highlighted_pokemon_by_name(pokemon_name){
        this.visit()
        cy.waitUntil(() => {
            if (!Cypress.$(`.loaded.highlight [title="${pokemon_name}"]`).length) {
              return this.click_next_highlight().then(() => false);
            } else {
              return true;
            }
          });
    }

    scroll_highlights_until_pokemon(pokemon_name){
        this.visit();
        this.get_highlighted_pokemon_by_name(pokemon_name);

    }
}

module.exports = new HomePage();