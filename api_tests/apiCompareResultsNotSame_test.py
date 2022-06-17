import unittest
import api_helper

class CompareNotSameData(unittest.TestCase):
    def runTest(self):
        """
        checking results are not the same
        """
        # this url should be in a config file
        url = 'https://www.pokemon.com/us/bulbasaur'
        url2 = 'https://www.pokemon.com/us/ivysaur'
        resp = api_helper.get(url)
        resp2 = api_helper.get(url2)
        resp_body = resp.json()
        resp_body2 = resp2.json()
        assert(resp_body['data']['name'] != resp_body2['data']['name'])