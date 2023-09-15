class SignupPage {
  
  confirmDate() {
    return cy.xpath('//*[@id="id_dob_root"]/div/div/div/div/div[2]/button').click();
  }

  openYearList() {
    return cy.xpath('//*[@id="id_dob_root"]/div/div/div/div/div[1]/div[1]/div/label').click();
  }
  selectYear() {
    return cy.xpath('//*[@id="id_dob_root"]/div/div/div/div/div[1]/div[1]/div/div/div/ul/li[27]').click();
  }

  openDateModal() {
    return cy.xpath('//*[@id="id_dob"]').click();
  }

  continueButton() {
    return cy.xpath('//*[@id="sign-up-theme"]/section/div/div/div[1]/form/input[2]').click();
    }

  newUsernameInput() {
    return cy.xpath('//*[@id="id_username"]');
  }

  newPasswordInput() {
    return cy.xpath('//*[@id="id_password"]');
  }

  newPasswordInputConf(){
    return cy.xpath('//*[@id="id_confirm_password"]');
  }
  
  newEmailInput(){
    return cy.xpath('//*[@id="id_email"]');
  }

  newEmailInputConf(){
    return cy.xpath('//*[@id="id_confirm_email"]');
  }

  termServices(){
    return cy.xpath('//*[@id="id_terms"]').click();

  }
    
  }
  
  export default SignupPage;