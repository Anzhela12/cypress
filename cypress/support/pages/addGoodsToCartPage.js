class AddGoodsToCartPage {

  getAddProductToBasket(){
      return cy.get('[aria-label="Add to Basket"]', {timeout:5000});
  }
  getShoppingCart(){
      return cy.get('[aria-label="Show the shopping cart"]', {timeout:5000});
  }
  getCartContainer(){
    return cy.get('app-basket', {timeout:5000});
  }
  getProductItems(){
    return cy.get('[class="mat-row cdk-row ng-star-inserted"]', {timeout:10000});
  }
  getTotalPrice(){
      return cy.get('[id="price"]', {timeout:5000});
  }
  getCheckoutButton(){
      return cy.get('[id="checkoutButton"]', {timeout:5000});
  }
};

export default new AddGoodsToCartPage();