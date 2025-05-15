const element = require ('../elementPage/logoutPage.json');

class LogoutPage {
    logout(){
        cy.get(element.userLogout).click();
        cy.wait(1000);
        cy.contains('Logout').click();
        cy.wait(1000);
        cy.contains('Login');
    }
}

export default new LogoutPage();