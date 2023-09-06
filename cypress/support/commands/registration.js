import { HomePage, LoginPage, RegisterPage } from '../pages/index';
import generateRandomEmail from '../helpers/generateRandomEmail';
import generateRandomNumber from '../helpers/generateRandomNumber';

Cypress.Commands.add('createNewAccount', () => {
  let randomUsername = `username_${generateRandomNumber(4)}`;
  let randomEmail = generateRandomEmail('test@fakemail.com');

  HomePage.loginTab.click();
  LoginPage.createAnAccountButton.click();
  RegisterPage.dateOfBirthField.click();
  cy.selectDate('1988', 'September', '20');
  RegisterPage.continueButton.click();
  RegisterPage.usernameField.type(randomUsername);
  RegisterPage.passwordField.type('testPassword123!');
  RegisterPage.confirmPasswordField.type('testPassword123!');
  RegisterPage.emailAddressField.type(`${randomEmail}`);
  RegisterPage.confirmEmailAddressField.type(`${randomEmail}`);
  RegisterPage.optOutPublicProfileRadioButton.click();
  RegisterPage.termsCheckbox.click();
  RegisterPage.continueToVerifyEmailButton.click();
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
