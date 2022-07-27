import { recurse } from 'cypress-recurse'

describe('QA_Challenge - Front End', () => {
  beforeEach(() => {
    cy.visit('/');
    // close popup
    cy.get('.ot-sdk-container #onetrust-close-btn-container').should('be.visible').click();
  });
  it('Scenario 1 - Navigate to the Pokedex and Search by Name', () => {
    cy.get('.explore > a').should('be.visible').click();
    cy.url().should('contain', '/pokedex');
    cy.get('.results li a').should('have.length.greaterThan', 3);
    cy.get('#searchInput').should('be.be.visible').click().type('Pikachu');
    cy.get('#search[type=submit]').click();
    cy.get('.results li a').should('have.length', 1);
    cy.get('ul li figure a').should('have.attr', 'href', '/us/pokedex/pikachu');
  });

  it('Scenario 2 - Navigate to the Pokedex and Sort by Highest Number (First)', () => {
    cy.get('.explore > a').should('be.visible').click();
    cy.url().should('contain', '/pokedex');
    cy.get('.results li a').should('have.length.greaterThan', 3);
    cy.xpath('//select[@id="sortOrder"]/ancestor::div/div/label').should('contain.text', 'Lowest Number (First)');
    cy.xpath('//select[@id="sortOrder"]/ancestor::div/div/label').should('be.visible').click();
    cy.get('ul>li[data-option-value=numberDesc]').should('be.visible').click();
    cy.xpath('//select[@id="sortOrder"]/ancestor::div/div/label').should('contain.text', 'Highest Number (First)');
  });

  it('Scenario 3 - From the Home Page, scroll through the Featured Pokemon Gallery Slider and verify Dewott in its highlighted select state', () => {
    // Note: This test will intentionally fail since the highlighted pokemon is random selected
    cy.get('#pokemon-character-slider  ul li')
      .filter('[class*=highlight]')
      .scrollIntoView()
      .should("have.attr", "data-analytics-label")
      .then(attr => {
        expect(attr).to.contain('Dewott', 'Highlighted element found');
      });
  });

  it('Scenario 4 - By selecting `Explore More Pokemon` CTA on the Home Page, find Jiggly Puff in the hover state of the Pokedex', () => {
    cy.get('.slider-more-button a').click();
    cy.url().should('contain', '/pokedex');
    // Click on Load more once
    cy.get('#loadMore>span').scrollIntoView().click();
    // Scroll up to find Jigglypuff
    recurse(
      () => cy.xpath(`//li//h5`).invoke('text'),
      (text) => text.includes('Jigglypuff'),
      {
        timeout: 10000,
        limit: 3000,
        delay: 100,
        log: true,
        debugLog: true,
        post() {
          cy.xpath(`//li//h5`).then(($x) => {
            cy.scrollTo('bottom')
            cy.xpath(`//li//h5`).should('have.length.greaterThan', $x.length)
          })
        }
      }
    );
    // Final Assertion
    cy.xpath(`//li//h5[text()='Jigglypuff']`).scrollIntoView().should('be.visible');
  });

  it('Scenario 5 - Check National Program Certified', () => {
    cy.get('#footer--privacy>a').scrollIntoView().click();
    cy.get('#modal h6').should('contain.text', 'You are about to leave a site operated by The Pokémon');
    cy.get('#modal a[target=_blank]').should('have.attr', 'href').as('href');
    cy.get('#modal a.closeBtn').click();
    cy.get('@href').then(($href) => {
      cy.forceVisit($href)
      cy.get('div.row:nth-child(1) h1.seal_header').should('contain.text', 'The Pokemon Company International');
    });
  });
});