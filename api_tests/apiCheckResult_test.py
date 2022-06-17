import unittest
import api_helper

class CheckResult(unittest.TestCase):
    def runTest(self):
        """
        checking result is ok
        """
        # this url should be in a config file, this is a real public api to make tests
        url = 'https://reqres.in/api/users/2'
        resp = api_helper.get(url)
        resp_body = resp.json()
        assert(resp_body['data']['first_name'] == 'Janet')
        assert(resp_body['data']['last_name'] == 'Weaver')