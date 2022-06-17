import unittest
import api_helper

class UpdateLogin(unittest.TestCase):
    def runTest(self):
        """
        creating a new login
        """
        url = 'https://www.pokemon.com/us/'# this url should be in a config file
        body = {"user": "update_some_name", "password": "secret"}
        resp = api_helper.put(url, body)
        assert resp.status_code == 403