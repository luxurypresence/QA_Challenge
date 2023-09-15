import CommonPage from '../../pages/CommonPage';
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import moment from 'moment';

const testData = require('../../fixtures/test-data.json');

describe('Signup', () => {
    const commonPage = new CommonPage();
    const loginPage = new LoginPage();
    const signupPage = new SignupPage();


    beforeEach(() => {
        cy.visit('https://www.pokemon.com/us');
        commonPage.rejectCookies();
        commonPage.openLogIn();
        loginPage.clickSignupButton();
    });

  it('Account Creation', () => {

    cy.wait(2000);
    signupPage.openDateModal();
    cy.wait(2000);
    signupPage.openYearList();
    cy.wait(2000);
    signupPage.selectYear();
    cy.wait(2000);
    signupPage.confirmDate();
    cy.wait(2000);
    signupPage.continueButton();

    //Creation of dynamic username and email
    const now = moment().format("MM-DD-YYh:mm:ss");
    const username = `test_${now}`;
    const email = `${username}@hotmail.com`

    signupPage.newUsernameInput().type(username);
    signupPage.newPasswordInput().type(testData.loginuser.password);
    signupPage.newPasswordInputConf().type(testData.loginuser.password);

    signupPage.newEmailInput().type(email);
    signupPage.newEmailInputConf().type(email);

    signupPage.termServices();

    //Can't continue due to reCAPTCHA validation
    
});
});