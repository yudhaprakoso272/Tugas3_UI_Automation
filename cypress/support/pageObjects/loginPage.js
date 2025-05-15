const element = require ('../elementPage/loginPage.json');

class LoginPage {
    inputLogin({
        username=Cypress.env('USERNAME_VALID'),
        password=Cypress.env('PASSWORD_VALID')
    }){
        cy.get(element.username).type(username);
        cy.get(element.password).type(password);
        cy.get(element.submit).click();
    }
}

export default new LoginPage();