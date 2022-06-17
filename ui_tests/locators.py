

class Locator(object):
 
    #Home Page
    pokedex_tab = 'a[href="/us/pokedex/"]'
    close_cookies_dialog = 'button[aria-label="Close"]'
    highlighted_pokemon = 'li.loaded.highlight'

    #pokedex Page
    input_name = 'input[data-type="name"]'
    venusaur = 'img[src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png"]'
    sort_control = '//label[text()="Lowest Number (First)"]'
    highest_number = 'li[data-option-value="numberDesc"]'
    pokemon_id = 'p[class="id"]'
    view_more_pokemon_button = 'a.button.button-black.right'
    jigglypuff = '//h5[text()="Jigglypuff"]'
    alert_error = 'div.alert.alert-error'