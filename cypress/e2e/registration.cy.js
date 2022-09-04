import authLink from '../fixtures/auth-link'
import validUserData from '../fixtures/authData';
import * as helpers from '../support/helpers';
import registrationPage from '../support/pages/registrationPage';
import loginPage from '../support/pages/loginPage';

beforeEach(() => {
    cy.restoreLocalStorage();
  });

  afterEach(() => {
    cy.saveLocalStorage();
  });

let randomString = {
  createRandomStr(length) {
    return helpers.createRandomString(length);
  }
}

describe('Check registration form with incorrect or empty values', () => {

  it('Enter invalid email input', () => {
    cy.openRegistrationForm();
    registrationPage.getEmail().click().type(randomString.createRandomStr(8)).should('have.class', 'ng-invalid');
    registrationPage.getEmail().click().clear().blur().should('have.class', 'ng-invalid');
  });

  it('Enter invalid password & repeatPassword inputs', () => {
    registrationPage.getPassword().click().type(randomString.createRandomStr(4)).should('have.class', 'ng-invalid');
    registrationPage.getPassword().click().clear().type(randomString.createRandomStr(41)).should('have.class', 'ng-invalid');
    registrationPage.getPassword().click().clear().blur().should('have.class', 'ng-invalid');
    registrationPage.getRepeatPassword().click().type(randomString.createRandomStr(10)).should('have.class', 'ng-invalid');
  });

  it('Enter invalid security question & security answer', () => {
    registrationPage.getDropDown().focus().blur();
    registrationPage.getSecurityAnswer().focus().blur()
    registrationPage.getRegistrationButton().should('have.attr', 'disabled');
  });

});

describe('Check registration form with correct values', () => {

  it('Enter valid email input', () => {
    cy.openRegistrationForm();
    registrationPage.getEmail().click().type(validUserData.email);
  });

  it('Enter valid password & repeat password inputs', () => {
    registrationPage.getPassword().click().type(randomString.createRandomStr(5));
    registrationPage.getPassword().click().clear().type(randomString.createRandomStr(40));
    registrationPage.getPassword().click().clear().type(validUserData.password);
    registrationPage.getPassword().then(($input) => {
    registrationPage.getRepeatPassword().click().clear().type($input.val()).should('have.value', $input.val());
    });
  });

  it('Enter valid security question & security answer', () => {
    registrationPage.getDropDown().click();
    registrationPage.getSecurityQuestion().contains(' Your favorite book? ').click();
    registrationPage.getSecurityAnswer().click().type('How to make coffee');
  });

  it('Check form request with valid params', () => {
    cy.intercept('POST', `${authLink}/api/Users`, (request) => {
      expect(request.body.email).to.equal(validUserData.email);
      expect(request.body.password).to.equal(validUserData.password);
      expect(request.body.passwordRepeat).to.equal(request.body.password);
      expect(request.body.securityAnswer).to.equal('How to make coffee');
      expect(request.body.securityQuestion.question).to.equal('Your favorite book?');
    });

    registrationPage.getRegistrationButton().click();
    cy.wait(1000);
    registrationPage.getAssertion().contains('Registration completed successfully. You can now log in.', {timeout:5000}).should('be.visible');
  });
});

describe('Check login form with incorrect or empty values', () => {

  it('Enter invalid email input', () => {
    cy.openLoginForm();
    loginPage.getAddEmail().click().type(incorrectEmail).should('have.class', 'ng-invalid');
    loginPage.getAddEmail().click().clear().blur().should('have.class', 'ng-invalid');
  });

  it('Enter invalid password input', () => {
    loginPage.getAddPassword().click().blur().should('have.class', 'ng-invalid');
    loginPage.getLoginButton().should('have.attr', 'disabled');
  });
});

describe('Check login form with correct values', () => {

  it('Enter valid email input', () => {
    cy.openLoginForm();
    loginPage.getAddEmail().click().type(validUserData.email);
  });

  it('Enter valid password input', () => {
    loginPage.getAddPassword().click().type(validUserData.password);
  });

  it('Check form request with valid params', () => {
    cy.intercept('POST', `${authLink}/rest/user/login`, (request) => {
      expect(request.body.email).to.equal(validUserData.email);
      expect(request.body.password).to.equal(validUserData.password);
    });

    loginPage.getLoginButton().click();
  });
});
