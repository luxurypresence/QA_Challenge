'use strict'

// eslint-disable-next-line no-undef
const axios = require('axios')

// Gets battle armor entries from Pokemon API
export function getMeBattleArmor(endpoint) {
  const url = endpoint.url

  return axios.request({
    method: 'GET',
    baseURL: `${url}`,
    url: '/ability/battle-armor',
    headers: { Accept: 'application/json' }
  })
}

// Gets a single pokemon information from Pokemon API
export function getMePokemonInformation(endpoint) {
  const url = endpoint.url

  return axios.request({
    method: 'GET',
    baseURL: `${url}`,
    url: '/pokemon/ditto',
    headers: { Accept: 'application/json' }
  })
}
