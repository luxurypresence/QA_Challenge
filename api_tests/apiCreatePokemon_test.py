import unittest
import api_helper

class CreatePokemon(unittest.TestCase):
    def runTest(self):
        """
        creating a new pokemon
        """
        url = 'https://www.pokemon.com/us/'# this url should be in a config file
        body = {"name": "new_pokemon"}
        resp = api_helper.post(url, body)
        assert resp.status_code == 201
        resp_body = resp.json()
        assert(resp_body['name'] == 'new_pokemon')