const element = require ('../elementPage/pimPage.json');

class PimPage {
    addNewEmployee({
        firstname,
        middlename,
        lastname, numberId
    }){
        cy.get(element.pimMenu).contains('PIM').click();
        cy.wait(2000);
        cy.get(element.pimHeader).contains('PIM');
        cy.get(element.addEmployee).contains('Add Employee').click();
        cy.wait(2000);
        cy.get(element.firstname).type(firstname);
        cy.get(element.middlename).type(middlename);
        cy.get(element.lastname).type(lastname);
        // cy.get(element.numberId).clear().type(numberId);
        // cy.get(element.cancelButton).contains('Cancel').click();
        cy.get(element.saveButton).contains('Save').click();
        cy.wait(1000);
        cy.contains('Success');
        cy.contains('Personal Details');
    }
}

export default new PimPage();