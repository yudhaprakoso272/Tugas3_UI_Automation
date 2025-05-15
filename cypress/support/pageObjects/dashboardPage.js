const element = require ('../elementPage/dashboardPage.json');

class DashboardPage {
    verifyDashboard(){
        cy.get(element.dashboardHeader).contains('Dashboard');
        cy.wait(1000);
    }
}

export default new DashboardPage();