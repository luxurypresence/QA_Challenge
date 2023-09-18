class RegisterPage {
  get dateOfBirthField() {
    return cy.get('#id_dob');
  }

  get continueButton() {
    return cy.get('.continue-button');
  }

  get usernameField() {
    return cy.get('#id_username');
  }

  get passwordField() {
    return cy.get('#id_password');
  }

  get confirmPasswordField() {
    return cy.get('#id_confirm_password');
  }

  get emailAddressField() {
    return cy.get('#id_email');
  }

  get confirmEmailAddressField() {
    return cy.get('#id_confirm_email');
  }

  get optInGeneralCheckbox() {
    return cy.get('#id_email_opt_in_general');
  }

  get optInPcenterCheckbox() {
    return cy.get('#id_email_opt_in_pcenter');
  }

  get optOutPublicProfileRadioButton() {
    return cy.get('#id_public_profile_opt_in_1');
  }

  get termsCheckbox() {
    return cy.get('#id_terms');
  }

  get continueToVerifyEmailButton() {
    return cy.get('[type="submit"]').eq(0);
  }
}

export default new RegisterPage();
