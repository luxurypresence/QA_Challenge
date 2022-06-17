import unittest
import api_helper

class CheckStatusOk(unittest.TestCase):
    def runTest(self):
        """
        checking status ok
        """
        url = 'https://www.pokemon.com/us/'# this url should be in a config file
        resp = api_helper.get(url)
        assert resp.status_code == 200
