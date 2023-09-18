import {
  SaucelabsHomePage,
  SaucelabsLoginPage,
  SaucelabsInventoryPage,
  SaucelabsCartPage,
  SaucelabsCheckoutPage,
} from '../support/pages/index';

describe('Verify standard user can login', () => {
  it('Standard User can login into https://www.saucedemo.com/', () => {
    SaucelabsHomePage.visit();
    SaucelabsLoginPage.loginIntoSystemWith('standard_user');
    SaucelabsInventoryPage.addRandomItemToShoppingCart();
    SaucelabsCartPage.verifyElementOnCartAndContinueToCheckout();
    SaucelabsCheckoutPage.completeCheckoutInformation();
    SaucelabsCheckoutPage.verifyElementOnCheckoutAndFinish();
  });
});
