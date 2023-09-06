declare namespace Cypress {
  interface Chainable {
    /**
     * Register a new user into Pokemon App
     *
     * @see cypress\support\commands\registration.js
     *
     * @example
     * cy.createNewAccount()
     */
    createNewAccount();
  }
}
