class LoginPage {
  
    clickLoginButton() {
      return cy.xpath('//*[@id="btnLogin"]').click();
    }

    clickSignupButton() {
      return cy.xpath('//*[@id="user-account-signup"]').click();
    }

    usernameInput() {
        return cy.xpath('//*[@id="username"]');
      }

    passwordInput() {
        return cy.xpath('//*[@id="password"]');
    }
  
    
  }
  
  export default LoginPage;