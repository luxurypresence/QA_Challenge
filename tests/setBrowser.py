import argparse
import json

parser = argparse.ArgumentParser(description='Set browser in global.json config. Supported browsers are: chrome, firefox')
parser.add_argument('--browser', help='browser to be set: chrome, firefox')
args = parser.parse_args()

with open('./envs/global.json', 'r') as file:
    data = json.load(file)
    browser_name = args.browser.lower()
    file.close()
    if browser_name in ('chrome', 'firefox'):
        data['browser'] = browser_name
        with open('./envs/global.json', 'w') as file:
            json.dump(data, file)
            print('Browser has been set to: ' + browser_name)
    else:
        print('Browser name not supported! Supported browsers are: chrome, firefox')
