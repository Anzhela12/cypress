class PaymentOptionsPage {

  getCreditCard(){
      return cy.get('app-payment-method mat-expansion-panel-header', {timeout:10000});
  }
  getNameForCreditCard(){
      return cy.get('[id="mat-input-10"]', {timeout:5000});
  }
  getCardNumber(){
      return cy.get('[id="mat-input-11"]', {timeout:5000});
  }
  getTermOfMonth(){
      return cy.get('[id="mat-input-12"]', {timeout:5000});
  }
  getTermOfYear(){
      return cy.get('[id="mat-input-13"]', {timeout:5000});
  }
  getSubmitButton(){
      return cy.get('[id="submitButton"]', {timeout:5000});
  }
  getChooseCard(){
      return cy.get('[class="mat-radio-inner-circle"]', {timeout:5000});
  }
};

export default new PaymentOptionsPage();