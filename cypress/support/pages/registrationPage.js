class RegistrationUserPage {

  getEmail(){
      return cy.get('[id="emailControl"]', {timeout:5000});
  }

  getPassword(){
      return cy.get('[id="passwordControl"]', {timeout:5000});
  }

  getRepeatPassword(){
      return cy.get('[id="repeatPasswordControl"]', {timeout:5000});
  }

  getDropDown(){
      return cy.get('[name="securityQuestion"]', {timeout:5000});
  }

  getSecurityQuestion(){
      return cy.get('[class="mat-option-text"]', {timeout:5000});
  }

  getSecurityAnswer(){
      return cy.get('[id="securityAnswerControl"]', {timeout:5000});
  }
  getRegistrationButton(){
      return cy.get('[id="registerButton"]', {timeout:5000});
  }

  getAssertion(){
      return cy.get('simple-snack-bar.mat-simple-snackbar.ng-star-inserted',{timeout:5000});
  }

};

export default new RegistrationUserPage();