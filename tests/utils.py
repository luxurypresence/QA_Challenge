import json


def get_global_conf():
    with open('./envs/global.json') as file:
        return json.load(file)


def get_env_config():
    global_conf = get_global_conf()
    with open('./envs/' + global_conf['env_file']) as config:
        return json.load(config)
