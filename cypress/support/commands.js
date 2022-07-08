// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until';

/**
 * This command performs a scroll until text is displayed
 *
 * @param text, the text to be displayed
 * @param tries, the number of tries to scroll
 */
 Cypress.Commands.add('scrollUntilTextDisplayed', (text, tries = 30) => {
    let isPresent
    cy.get('[class="nav-btn next"]').scrollIntoView().click({force: true});
    cy.get('[data-content-id="featured-item"][class*="highlight"]').find('a')
    .then(($element) => {
        if ($element.text().includes(text)) {
            isPresent = true
        }
    })
    .then(() => {
        if (isPresent) {
        return
        }
        if (tries >= 0) {
            tries = tries - 1
            cy.scrollUntilTextDisplayed(text, tries)
        } else {
            expect(tries).to.be.greaterThan(0)
        }
    })
})