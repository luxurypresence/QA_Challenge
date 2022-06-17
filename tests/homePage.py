from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.keys import Keys
from locators import Locator
from selenium.webdriver.common.action_chains import ActionChains

class HomePage(object):
    def __init__(self, driver):
        self.driver = driver

    """Home page action methods come here"""
    def click_pokedex_tab(self):
        element = self.driver.find_element(By.CSS_SELECTOR, Locator.pokedex_tab)
        element.click()

    def close_cookies_dialog(self):
        element = self.driver.find_element(By.CSS_SELECTOR, Locator.close_cookies_dialog)
        element.click()

    def check_highlighted_pokemon(self, pokemon_name):
        element = self.driver.find_element(By.CSS_SELECTOR, Locator.highlighted_pokemon)
        actions = ActionChains(self.driver)
        actions.move_to_element(element).perform()
        assert(pokemon_name in element.text)

    def click_view_more_pokemon_button(self):
        element = self.driver.find_element(By.CSS_SELECTOR, Locator.view_more_pokemon_button)
        element.click()