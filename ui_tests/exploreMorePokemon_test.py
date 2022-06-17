import unittest
import homePage
import browserConfig
import logging
import pokedexPage

class PokedexSortByHighestNumber(unittest.TestCase):
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
        home_page.click_view_more_pokemon_button()
        pokedex_page = pokedexPage.PokedexPage(self.driver)
        pokedex_page.search_criteria('Jigglypuff')
        pokedex_page.hover_pokemon()
        #I don't see a hover state in the pokedex, when you do mouse hover the jigglypuff
        #just a quick animation and then nothing, I can't assert the hover state so I'm just doing mouse over jigglypuff
        #I would go ask the PM or developers in this case on want to do

    def tearDown(self):
        self.driver.close()

