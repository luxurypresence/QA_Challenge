class PokedexPage{

    page_elements = {
        page_url: 'https://www.pokemon.com/us/pokedex/',
        search_bar_field: () => cy.get('#searchInput'),
        search_bar_button: () => cy.get('.button-search'),
        search_result_by_name: () => cy.get(' .results .pokemon-info > h5'),
        sort_dropdown_field: () => cy.get('.push-1 .custom-select-menu'),
        selector_dropdown_options_by_name: (option_name) => cy.get(`.custom-select-wrapper .custom-select-menu [data-option-value="${option_name}"]`),
        load_more_pokemon_button: () => cy.get('#loadMore>.button-lightblue'),
        pokemon_icon_by_name: (pokemon_name) => cy.get(`[href='/us/pokedex/${pokemon_name.toLowerCase()}']`)
    }

    // Locator Functions
    set_search_field(text){
        this.visit();
        this.page_elements.search_bar_field().type(text);
    }

    click_search_button(){
        this.visit();
        this.page_elements.search_bar_button().click();
    }

    click_load_more_pokemon(){
        this.visit();
        this.page_elements.load_more_pokemon_button().click();
    }

    select_sort_option_by_name(option_name){
        this.visit();
        this.page_elements.sort_dropdown_field().click();
        this.page_elements.selector_dropdown_options_by_name(option_name).click();
    }

    get_pokemon_icon_by_name(pokemon_name){
        this.visit();
        return this.page_elements.pokemon_icon_by_name(pokemon_name);
    }

    hover_over_pokemon(pokemon_name){
        this.visit();
        this.page_elements.pokemon_icon_by_name(pokemon_name).trigger('mouseover', {force: true});
    }


    // Page functions
    visit(){
        cy.url().then(($url) => {
            if(!$url.includes(this.page_elements.page_url)) {
                cy.log("Yes")
                cy.visit(this.page_elements.page_url)
            }
        });
    }

    scroll_until_pokemon(pokemon_name){
        this.visit()
        cy.waitUntil(() => {
            if (!Cypress.$(`[href='/us/pokedex/${pokemon_name.toLowerCase()}']`).length) {
                return cy.scrollTo('bottom').then(() => false);
            } else {
              return true;
            }
          });
    }

    search_pokedex(pokemon_name){
        this.visit();
        this.set_search_field(pokemon_name);
        this.click_search_button();
    }

    sort_pokedex_by_highest_id(pokemon_name){
        this.visit();
        this.select_sort_option_by_name('numberDesc');
    }
}

module.exports = new PokedexPage();