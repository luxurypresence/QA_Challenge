import requests

def get(url):
    headers = {'Content-Type': 'application/json'}
    resp = requests.get(url, headers=headers)
    return resp

def post(url, body):
    headers = {'Content-Type': 'application/json'}
    resp = requests.post(url, json=body)
    return resp

def put(url, body):
    headers = {'Content-Type': 'application/json'}
    resp = requests.put(url, json=body)
    return resp