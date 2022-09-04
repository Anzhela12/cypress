import validUserData from '../fixtures/authData';
import addressData from '../fixtures/address-data';
import creditCardData from '../fixtures/credit-card-data';
import loginPage from '../support/pages/loginPage';
import addGoodsToCartPage from '../support/pages/addGoodsToCartPage';
import addressPage from '../support/pages/addressPage';
import deliveryPage from '../support/pages/delivery';
import paymentOptionsPage from '../support/pages/paymentOptionsPage';
import confirmOrderPage from '../support/pages/confirmOrderPage';


beforeEach(() => {
  cy.restoreLocalStorage();
});

afterEach(() => {
  cy.saveLocalStorage();
});

describe('Buy goods', () => {
  it('Account authorization', () => {
    cy.openLoginForm();
    loginPage.getAddEmail().click().type(validUserData.email);
    loginPage.getAddPassword().click().type(validUserData.password);
    loginPage.getLoginButton().click();
    cy.wait(1000);
  });

  it('Add product in shop cart', () => {
    addGoodsToCartPage.getAddProductToBasket().first().click();
    addGoodsToCartPage.getShoppingCart().click();
  });

  it('Check correct total price', () => {
    addGoodsToCartPage.getCartContainer().then($cartContainer => {
      const totalPrice = Number($cartContainer.find('#price').html().replace(/[^\d.]/ig, ''));
      const productUnitPrice = Number($cartContainer.find('mat-table mat-row .mat-cell:nth-child(4).mat-column-price').html().replace(/[^\d.]/ig, ''));
      const productAmount = $cartContainer.find('.mat-cell:nth-child(3) > span').html();
      expect(totalPrice).to.equal(productUnitPrice * productAmount);
    });
    addGoodsToCartPage.getCheckoutButton().click();
  });

  it('Enter address', () => {
    addressPage.getAddNewAddress().click();
    addressPage.getCountry().click().type(addressData.country);
    addressPage.getName().click().type(addressData.name);
    addressPage.getMobileNumber().click().type(addressData.phone);
    addressPage.getZipCode().click().type(addressData['zip-code']);
    addressPage.getAddress().click().type(addressData.address);
    addressPage.getCity().click().type(addressData.city);
    addressPage.getClickSubmitButton().click();
    addressPage.getChooseAddress().first().click();
    addressPage.getClickContinueButton().click();
  });

  it('Select delivery method', () => {
    deliveryPage.getChooseDeliveryMethod().first().click();
    deliveryPage.getClickContinueButton().click();
  });

  it('Add payment card with correct options', () => {
    paymentOptionsPage.getCreditCard().click({force: true});
    paymentOptionsPage.getNameForCreditCard().click().type(creditCardData.name);
    paymentOptionsPage.getCardNumber().click().type(creditCardData.cardNum);
    paymentOptionsPage.getTermOfMonth().select(creditCardData.termOfMonth);
    paymentOptionsPage.getTermOfYear().select(creditCardData.termOfYear);
    paymentOptionsPage.getSubmitButton().click();
    cy.wait(500);
    paymentOptionsPage.getChooseCard().first().click({force:true});
  });

  it('Confirm order', () => {
    confirmOrderPage.getClickReviewButton().click();
    confirmOrderPage.getClickConfirmButton().click();
  });
});
