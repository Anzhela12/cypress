class DeliveryPage {

  getChooseDeliveryMethod(){
      return cy.get('[class="mat-radio-container"]', {timeout:5000});
  }
  getClickContinueButton(){
      return cy.get('[aria-label="Proceed to delivery method selection"]', {timeout:5000});
  }
};
export default new DeliveryPage();