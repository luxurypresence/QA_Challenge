import unittest
import homePage
import pokedexPage
import browserConfig
import logging


class NonExistentPokemon(unittest.TestCase):
    def setUp(self):
        browser = browserConfig.BrowserConfig()
        self.driver = browser.get_browser()
        logging.info(browser.get_configured_browser())

    def runTest(self):
        """
        Checking search non existent pokemon, assert error message
        """
        home_page = homePage.HomePage(self.driver)
        home_page.close_cookies_dialog()
        home_page.click_pokedex_tab()
        pokedex_page = pokedexPage.PokedexPage(self.driver)
        pokedex_page.search_criteria('non existent')
        pokedex_page.check_error_message('No Pokémon Matched Your Search!')

    def tearDown(self):
        self.driver.close()

