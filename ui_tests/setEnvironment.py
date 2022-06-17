import argparse
import json

parser = argparse.ArgumentParser(description='Set environment against tests will run')
parser.add_argument('--env', help='options are: development, staging, production')
args = parser.parse_args()

with open('./envs/global.json', 'r') as file:
    data = json.load(file)
    env = args.env.lower()
    if env in ('development', 'staging', 'production'):
        data['environment'] = env
        with open('./envs/global.json', 'w') as file:
            json.dump(data, file)
            file.close()
            print('Environment has been set to: ' + env)
    else:
        print('Environment must be one of the follow: development, staging, production')