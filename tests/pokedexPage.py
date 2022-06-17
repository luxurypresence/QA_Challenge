from distutils.log import error
from xml.dom.minidom import Element
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as ec
from selenium.webdriver.common.keys import Keys
from locators import Locator
from selenium.webdriver.common.action_chains import ActionChains
import time

class PokedexPage(object):
    def __init__(self, driver):
        self.driver = driver

    """Pokedex page action methods come here"""
    def search_criteria(self, criteria):
        element = (WebDriverWait(self.driver, 20).until(ec.visibility_of_element_located((By.CSS_SELECTOR, Locator.input_name))))
        element.click()
        element.send_keys(criteria)
        element.send_keys(Keys.RETURN)

    def check_venusaur_present(self):
        assert(WebDriverWait(self.driver, 5).until(ec.visibility_of_element_located((By.CSS_SELECTOR, Locator.venusaur))))

    def sort_by_highest_number(self):
        element = self.driver.find_element(By.XPATH, Locator.sort_control)
        element.click()
        element = self.driver.find_element(By.CSS_SELECTOR, Locator.highest_number)
        element.click()

    def check_sort_by_highest_number(self):
        """I'm making a copy of elements list which contains all shown pokemon ids,
        then sorting from high to low myselft and comapring the lists to make sure is corretly sorted in the ui
        """
        time.sleep(1)
        elements = self.driver.find_elements(By.CSS_SELECTOR, Locator.pokemon_id)
        elements_text = []
        for e in elements:
            elements_text.append(e.text)
        elements_text_sorted = elements_text.copy()
        elements_text_sorted.sort(reverse=True)
        assert(elements_text == elements_text_sorted)

    def hover_pokemon(self):
        element = self.driver.find_element(By.XPATH, Locator.jigglypuff)
        actions = ActionChains(self.driver)
        actions.move_to_element(element).perform()

    def check_error_message(self, error_message):
        element = (WebDriverWait(self.driver, 3).until(ec.visibility_of_element_located((By.CSS_SELECTOR, Locator.alert_error))))
        assert(error_message in element.text)