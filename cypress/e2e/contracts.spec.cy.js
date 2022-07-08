/* eslint-disable no-undef */
import { resolve } from 'path'
import { Pact } from '@pact-foundation/pact'
import EXPECTED_BODY from '../fixtures/contract1.json'

// Load the consumer client code which we will call in our test
import { getMeBattleArmor, getMePokemonInformation } from '../../contract'

describe('Example API Pact Test', () => {
  let url = 'https://pokeapi.co/api/v2'

  // Use Pact to create a mock provider which we will point our consumer code at during the test
  const provider = new Pact({
    log: resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
    dir: resolve(process.cwd(), 'pacts'),
    spec: 2,
    consumer: 'Pokemon API',
    provider: 'Pokemon API'
  })

  // Setup the provider
  before(() => provider.setup())

  // Write Pact when all tests done
  after(() => provider.finalize())

  // Verify with Pact, and reset expectations
  afterEach(() => provider.verify())

  describe('Get Battle Armors', () => {
    before((done) => {
      const interaction = {
        state: 'i have a list of abilities',
        uponReceiving: 'a request for all battle armors',
        withRequest: {
          method: 'GET',
          path: '/ability/battle-armor',
          headers: {
            Accept: 'application/json'
          }
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          },
          body: EXPECTED_BODY
        }
      }
      provider.addInteraction(interaction).then(() => {
        done()
      })
    })

    it('returns the correct response', (done) => {
      getMeBattleArmor(url).then((response) => {
        expect(response.data).to.eql(EXPECTED_BODY)
        done()
      }, done)
    })
  })

  describe('get /dog/1', () => {
    before((done) => {
      const interaction = {
        state: 'i have a list of dogs',
        uponReceiving: 'a request for a single dog',
        withRequest: {
          method: 'GET',
          path: '/pokemon/ditto',
          headers: {
            Accept: 'application/json'
          }
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          },
          body: EXPECTED_BODY
        }
      }
      provider.addInteraction(interaction).then(() => {
        done()
      })
    })

    it('returns the correct response', (done) => {
      getMePokemonInformation(url).then((response) => {
        expect(response.data).to.eql(EXPECTED_BODY)
        done()
      }, done)
    })
  })
})
