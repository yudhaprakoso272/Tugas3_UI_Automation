const element = require ('../elementPage/leavePage.json');

class LeavePage {
    addCuti({
        employee, name, leave,
        period, entitlement
    }){
        cy.get(element.leaveMenu).contains('Leave').click();
        cy.wait(2000);
        cy.get(element.leaveHeader).contains('Leave');
        cy.get(element.entitlement).contains('Entitlements').click();
        cy.wait(1000);
        cy.contains(element.addEntitlement).click();
        cy.wait(2000);
        // Add to (Individual)
        // cy.get(element.individual).click();
        // Add to (Multiple)
        // cy.get(element.multiple).click();
        cy.get(element.employee).type(employee);
        cy.wait(2000);
        cy.contains(name).click();
        cy.get(element.leaveType).click();
        cy.contains(leave).click();
        cy.get(element.period).click();
        cy.contains(period).click();
        cy.get(element.numberEnti).type(entitlement);
        // cy.get(element.cancelButton).contains('Cancel').click();
        cy.get(element.saveButton).contains('Save').click();
        cy.wait(2000);
        // cy.get(element.cancelButton2).contains('Cancel').click();
        cy.get(element.confirmButton).contains('Confirm').click();
        cy.wait(1000);
        cy.contains('Success');
        cy.contains('Leave Entitlements');
    }

    requestCuti({
        leave, fromDate, toDate,
        partialDays, duration
    }){
        cy.get(element.leaveMenu).contains('Leave').click();
        cy.wait(2000);
        cy.get(element.leaveHeader).contains('Leave');
        cy.get(element.applyTopbar).contains('Apply').click();
        cy.wait(2000);
        cy.contains('Apply Leave');
        cy.get(element.leave).click();
        cy.contains(leave).click();
        cy.get(element.fromDate).click();
        cy.contains(fromDate).click();
        cy.get(element.toDate).click();
        cy.contains(toDate).click();
        // cy.get(element.partialDays).click();
        // cy.contains(partialDays).click();
        cy.get(element.duration).click();
        cy.contains(duration).click();
        cy.get(element.applyButton).contains('Apply').click();
        cy.wait(1000);
        cy.contains('Success');
    }

    approveCuti({
        name
    }){
        cy.get(element.leaveMenu).contains('Leave').click();
        cy.wait(2000);
        cy.get(element.leaveHeader).contains('Leave');
        cy.get(element.moreMenu).contains('More').click();
        cy.wait(1000);
        cy.contains('Leave List').click();
        cy.wait(2000);
        cy.contains('Record Found');
        cy.contains(name);
        cy.get(element.approveButton).contains('Approve').click();
        cy.get(element.rejectButton).contains('Reject').click();
        cy.wait(1000);
        cy.contains('Success');
    }

    verifyCuti(){
        cy.get(element.leaveMenu).contains('Leave').click();
        cy.wait(2000);
        cy.get(element.leaveHeader).contains('Leave');
        cy.get(element.myLeave).contains('My Leave').click();
        cy.contains('Records Found');
        cy.contains('2025-16-05');
        cy.contains('avram budi setiawan');
        cy.wait(1000);
        cy.get(element.tabelStatus).contains('Scheduled');
        cy.wait(2000);
    }
}

export default new LeavePage();