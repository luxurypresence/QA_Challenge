import CommonPage from '../../pages/CommonPage';
import LoginPage from '../../pages/LoginPage';
import ProfilePage from '../../pages/ProfilePage';

const testData = require('../../fixtures/test-data.json');

describe('Login', () => {
    const commonPage = new CommonPage();
    const loginPage = new LoginPage();
    const profilePage = new ProfilePage();


    beforeEach(() => {
        cy.visit('https://www.pokemon.com/us');
        commonPage.rejectCookies();
        commonPage.openLogIn();
    });

  it('login into the account', () => {

    cy.wait(2000); 

    // Enter the new username and password
    loginPage.usernameInput().type(testData.loginuser.username);
    loginPage.passwordInput().type(testData.loginuser.password);

    // Submit login form
    loginPage.clickLoginButton();

    //confirm that it was redirected to the profile and the username is the same
    cy.wait(2000);
    cy.get (profilePage.profileNameLabel).should('have.text', testData.loginuser.username);
    
});
});