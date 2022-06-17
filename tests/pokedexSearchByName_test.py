import unittest
import homePage
import pokedexPage
import browserConfig
import logging


class PokedexSearchByName(unittest.TestCase):
    def setUp(self):
        browser = browserConfig.BrowserConfig()
        self.driver = browser.get_browser()
        logging.info(browser.get_configured_browser())

    def runTest(self):
        """
        Checking search by name pokedex page
        """
        home_page = homePage.HomePage(self.driver)
        home_page.close_cookies_dialog()
        home_page.click_pokedex_tab()
        pokedex_page = pokedexPage.PokedexPage(self.driver)
        pokedex_page.search_criteria('venusaur')
        pokedex_page.check_venusaur_present()
        #just asserting vensaur img is present, more asserts can be made like: no other pokemons are shown, etc

    def tearDown(self):
        self.driver.close()

