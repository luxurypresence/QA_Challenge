import HomePage from "../pages/home.page";
import PokedexPage from "../pages/pokedex.page";
import {waitForSpinnerToBeDisabled} from "../utils/waitUtils";

describe('TEST POKEDEX PAGE', () => {
    beforeEach('should land on pokemon website', () => {
        HomePage.open();
        HomePage.iconPokedex.click();
        cy.url().should('include', '/pokedex');
        PokedexPage.headerPokedex.should('be.visible');
        waitForSpinnerToBeDisabled();
    });

    it('should navigate to the Pokedex and Search by Name', function () {
        PokedexPage.searchByName('Entei');
    });

    it('should navigate to the Pokedex and Sort by Highest Number (First)', function () {
        PokedexPage.sortByHighestNumber();
    });
})
