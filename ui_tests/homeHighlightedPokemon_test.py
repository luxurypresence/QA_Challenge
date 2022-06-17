import unittest
import homePage
import browserConfig
import logging


class HomeHighlightedPokemon(unittest.TestCase):
    def setUp(self):
        browser = browserConfig.BrowserConfig()
        self.driver = browser.get_browser()
        logging.info(browser.get_configured_browser())

    def runTest(self):
        """
        Checking highlighted pokemon
        """
        home_page = homePage.HomePage(self.driver)
        home_page.close_cookies_dialog()
        home_page.check_highlighted_pokemon('Dewott')
        #this test will fail because Dewott is not even in the list of pokemons in the slider

    def tearDown(self):
        self.driver.close()

