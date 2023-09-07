import {
  PokemonHomePage,
  PokemonLoginPage,
  PokemonRegisterPage,
} from '../pages/index';
import generateRandomEmail from '../helpers/generateRandomEmail';
import generateRandomNumber from '../helpers/generateRandomNumber';

Cypress.Commands.add('createNewAccount', () => {
  let randomUsername = `username_${generateRandomNumber(4)}`;
  let randomEmail = generateRandomEmail('test@fakemail.com');

  PokemonHomePage.loginTab.click();
  PokemonLoginPage.createAnAccountButton.click();
  PokemonRegisterPage.dateOfBirthField.click();
  cy.selectDate('1988', 'September', '20');
  PokemonRegisterPage.continueButton.click();
  PokemonRegisterPage.usernameField.type(randomUsername);
  PokemonRegisterPage.passwordField.type('testPassword123!');
  PokemonRegisterPage.confirmPasswordField.type('testPassword123!');
  PokemonRegisterPage.emailAddressField.type(`${randomEmail}`);
  PokemonRegisterPage.confirmEmailAddressField.type(`${randomEmail}`);
  PokemonRegisterPage.optOutPublicProfileRadioButton.click();
  PokemonRegisterPage.termsCheckbox.click();
  PokemonRegisterPage.continueToVerifyEmailButton.click();
  cy.clickRecaptcha();
});

Cypress.Commands.add('clickRecaptcha', () => {
  cy.window().then((win) => {
    win.document
      .querySelector("iframe[src*='recaptcha']")
      .contentDocument.getElementById('recaptcha-token')
      .click();
  });
});

Cypress.Commands.add('selectDate', (year, month, day) => {
  cy.wait(500);
  cy.get('[name="picker__year"]').eq(0).select(year, { force: true });
  cy.get('[name="picker__month"]').eq(0).select(month, { force: true });
  cy.get('[role="gridcell"]').contains(day).click();
  cy.wait(500);
  cy.get('.picker__button--close').click();
});
