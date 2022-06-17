from selenium import webdriver
from utils import get_env_config, get_global_conf

ENV_CONFIG = get_env_config()
GLOBAL_CONFIG = get_global_conf()
BROWSER = GLOBAL_CONFIG['browser']
HEADLESS = ENV_CONFIG['headless']
URL = ENV_CONFIG[GLOBAL_CONFIG['environment']]


class BrowserConfig(object):
    def get_browser(self):
        if BROWSER == 'chrome':
            from selenium.webdriver.chrome.options import Options
            options = Options()
            options.headless = HEADLESS
            options.add_argument("--window-size=2400,1900")
            driver = webdriver.Chrome(ENV_CONFIG['chrome'], options=options)
            driver.implicitly_wait(20)
            driver.get(URL)
            return driver
        elif BROWSER == 'firefox':
            from selenium.webdriver.firefox.options import Options
            options = Options()
            options.headless = HEADLESS
            options.add_argument("--window-size=2400,1900")
            driver = webdriver.Firefox(executable_path=ENV_CONFIG['firefox'], options=options)
            driver.implicitly_wait(20)
            driver.get(URL)
            return driver

    def get_configured_browser(self):
        return BROWSER
