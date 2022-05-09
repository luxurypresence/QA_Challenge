export function waitForSpinnerToBeDisabled() {
    cy.get('.loader', {timeout: 300000}).should('not.exist');
}
