class CommonPage {
    visit(main) {
      cy.visit(`https://www.pokemon.com/us`);
    }
  
    //Open home button
    openHome() {
      return cy.xpath('/html/body/nav/div[2]/ul/li[1]/a').click();
    }
  
    //Login button
    openLogIn() {
      return cy.xpath('//*[@id="user-dashboard"]/div/nav/ul/li[1]/a').click();
    }

    //Reject cookies banner
    rejectCookies() {
      return cy.xpath('//*[@id="onetrust-reject-all-handler"]').click();
    }
  
  
  }
  
  export default CommonPage;