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
        Checking sort by highest number
        """
        home_page = homePage.HomePage(self.driver)
        home_page.close_cookies_dialog()
        home_page.click_pokedex_tab()
        pokedex_page = pokedexPage.PokedexPage(self.driver)
        pokedex_page.sort_by_highest_number()
        pokedex_page.check_sort_by_highest_number()


    def tearDown(self):
        self.driver.close()

