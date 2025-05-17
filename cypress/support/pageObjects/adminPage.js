const element = require ('../elementPage/adminPage.json');

class AdminPage {
    createAccount({
        role, employee, name, status,
        username, password, confirmpass
    }){
        cy.get(element.adminMenu).contains('Admin').click();
        cy.get(element.adminHeader).contains('Admin');
        cy.wait(1000);
        cy.get(element.add).contains('Add').click();
        cy.get(element.inputRole).click();
        cy.contains(role).click();
        cy.get(element.employeeName).type(employee);
        cy.wait(2000);
        cy.contains(name).click();
        cy.get(element.status).click();
        cy.contains(status).click();
        cy.get(element.username).type(username);
        cy.get(element.password).type(password);
        cy.get(element.confirmPass).type(confirmpass);
        cy.get(element.saveButton).click();
        cy.wait(1000);
        cy.contains('Success');
        cy.get(element.tabel).contains(username);
    }
}

export default new AdminPage();