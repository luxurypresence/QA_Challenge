export default class BasePage {
    get acceptCookies() { return cy.get('#onetrust-accept-btn-handler') }

    open(path) {
        cy.viewport(1280, 720);
        return cy.visit(path);
    }
}
