const loginPage = require ('../../support/pageObjects/loginPage');
const dashboardPage = require ('../../support/pageObjects/dashboardPage');
const leavePage = require ('../../support/pageObjects/leavePage');
const logoutPage = require ('../../support/pageObjects/logoutPage');

const addCutiData = require ('../../fixtures/data/addCutiData.json');

describe('Tugas 3 - Basic UI Automation', () => {
  it('Positive - Add Cuti New Employee', () => {
    cy.visit('/')

    // Login Admin
    loginPage.inputLogin({});
    dashboardPage.verifyDashboard();

    // Add Cuti New Employee
    leavePage.addCuti(addCutiData.cutiEmployee1);

    // Logout
    logoutPage.logout();
  })

  it('Negative - Add Cuti New Employee', () => {
    cy.visit('/')

    // Login Admin
    loginPage.inputLogin({});
    dashboardPage.verifyDashboard();

    // Add Cuti New Employee
    leavePage.addCuti(addCutiData.cutiEmployee2);

    // Logout
    logoutPage.logout();
  })
})