import authLink from '../../fixtures/auth-link.js'

class MainPage {

  open(){
      cy.visit(authLink);
  }

  getCloseModalWindowButton(){
     return cy.get('[class="mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted"]');
  }
  getAcceptingCookies(){
      return cy.get('[class="cc-btn cc-dismiss"]');
  }

  getAccountButton(){
     return cy.get('[id="navbarAccount"]', {timeout: 5000});
  }

  getLoginButton(){
     return cy.get('[id="navbarLoginButton"]', {timeout: 5000});
  }

  getButtonForRegistrationForm(){
      return cy.get('[class="primary-link"]', {timeout: 5000});
  }
};

export default new MainPage();