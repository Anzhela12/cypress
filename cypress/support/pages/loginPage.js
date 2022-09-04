class LoginPage {

    getAddEmail(){
        return cy.get('[id="email"]', {timeout:5000});
    }

    getAddPassword(){
        return cy.get('[id="password"]', {timeout:5000});
    }

    getLoginButton(){
        return cy.get('[id="loginButton"]', {timeout:5000});
    }
};

export default new LoginPage();