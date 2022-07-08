describe('Pokedex API scenarios', () => {
  it('should validates status code OK', () => {
    cy.request({
      method: 'GET',
      url: '/api/users/details?_=1657240486648'
    }).then((body) => {
      expect(body.status).to.eq(200)
    })
  })
  it('should validates status code Not Found', () => {
    cy.request({
      method: 'GET',
      url: '/api/usersss',
      failOnStatusCode: false
    }).then((body) => {
      expect(body.status).to.eq(404)
    })
  })
  it('should checks data results', () => {
    cy.request({
      method: 'GET',
      url: '/api/users/details?_=1657240486648'
    }).then((response) => {
      expect(response.body.isAuthenticated).to.eq(false)
    })
  })
  it('should simulates see new created pokemon using mock data', () => {
    cy.intercept('GET', '/us/api/pokedex/kalos', { fixture: 'pokemons.json' }).as('newpokemon')
    cy.visit('/us/pokedex/')
    cy.wait('@newpokemon').then((xhr) => {
      expect(xhr.response.statusCode).to.eq(200)
      expect(xhr.response.body[0].name).to.eq('newpokemon')
    })
  })
  it('should validates pokemon abilities are not same', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/alakazam').then((response) => {
      expect(response.status).to.eq(200)
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/pidgey').then((secResponse) => {
        expect(secResponse.status).to.eq(200)
        expect(response.body.abilities[0].ability.name).to.not.eq(secResponse.body.abilities[0].ability.name)
      })
    })
  })
  it('should validates pokemon abilities are same', () => {
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/bulbasaur').then((response) => {
      expect(response.status).to.eq(200)
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/ivysaur').then((secResponse) => {
        expect(secResponse.status).to.eq(200)
        expect(response.body.abilities[0].ability.name).to.eq(secResponse.body.abilities[0].ability.name)
      })
    })
  })
})
