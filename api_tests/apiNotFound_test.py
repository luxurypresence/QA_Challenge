import unittest
import api_helper

class NotFound(unittest.TestCase):
    def runTest(self):
        """
        not found
        """
        url = 'https://www.pokemon.com/us/fake' # using fake endpoint
        resp = api_helper.get(url)
        assert resp.status_code == 404
