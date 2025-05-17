const loginPage = require ('../../support/pageObjects/loginPage');
const dashboardPage = require ('../../support/pageObjects/dashboardPage');
const leavePage = require ('../../support/pageObjects/leavePage');
const logoutPage = require ('../../support/pageObjects/logoutPage');

const loginData = require ('../../fixtures/data/loginData.json');
const requestCuti = require ('../../fixtures/data/addCutiData.json');

describe('Tugas 3 - Basic UI Automation', () => {
  it('Positive - Request Cuti', () => {
    cy.visit('/')

    // Login Employee
    loginPage.inputLogin(loginData.employeeCredentials1);
    dashboardPage.verifyDashboard();

    // Request Cuti
    leavePage.requestCuti(requestCuti.requestCuti1);
    logoutPage.logout();

    // Login Admin
    loginPage.inputLogin({});
    dashboardPage.verifyDashboard();

    // Approve Cuti
    leavePage.approveCuti(requestCuti.approveCuti1);
    logoutPage.logout();

    // Login Employee
    loginPage.inputLogin(loginData.employeeCredentials1);
    dashboardPage.verifyDashboard();

    // Verify Cuti
    leavePage.verifyCuti(requestCuti.verifyCuti1);
    logoutPage.logout();
  })

  it('Negative - Request Cuti', () => {
    cy.visit('/')

    // Login Employee
    loginPage.inputLogin(loginData.employeeCredentials2);
    dashboardPage.verifyDashboard();

    // Request Cuti
    leavePage.requestCuti(requestCuti.requestCuti2);
    logoutPage.logout();

    // Login Admin
    loginPage.inputLogin({});
    dashboardPage.verifyDashboard();

    // Approve Cuti
    leavePage.approveCuti(requestCuti.approveCuti2);
    logoutPage.logout();

    // Login Employee
    loginPage.inputLogin(loginData.employeeCredentials2);
    dashboardPage.verifyDashboard();

    // Verify Cuti
    leavePage.verifyCuti(requestCuti.verifyCuti2);
    logoutPage.logout();
  })
})