class AddressPage {

  getAddNewAddress(){
      return cy.get('[aria-label="Add a new address"]', {timeout:5000});
  }
  getCountry(){
      return cy.get('[id="mat-input-3"]', {timeout:5000});
  }
  getName(){
      return cy.get('[id="mat-input-4"]', {timeout:5000});
  }
  getMobileNumber(){
      return cy.get('[id="mat-input-5"]', {timeout:5000});
  }
  getZipCode(){
      return cy.get('[id="mat-input-6"]', {timeout:5000});
  }
  getAddress(){
      return cy.get('[id="address"]', {timeout:5000});
  }
  getCity(){
      return cy.get('[id="mat-input-8"]', {timeout:5000});
  }
  getState(){
      return cy.get('[id="mat-input-9"]', {timeout:5000});
  }
  getClickSubmitButton(){
      return cy.get('[id="submitButton"]', {timeout:5000});
  }
  getChooseAddress(){
      return cy.get('[class="mat-cell cdk-cell cdk-column-Name mat-column-Name ng-star-inserted"]', {timeout:5000});
  }
  getClickContinueButton(){
      return cy.get('[aria-label="Proceed to payment selection"]', {timeout:5000});
  }
};

export default new AddressPage();