const loginPage = require ('../../support/pageObjects/loginPage');
const dashboardPage = require ('../../support/pageObjects/dashboardPage');
const pimPage = require ('../../support/pageObjects/pimPage');
const adminPage = require ('../../support/pageObjects/adminPage');
const logoutPage = require ('../../support/pageObjects/logoutPage');

const loginData = require ('../../fixtures/data/loginData.json');
const employeeData = require ('../../fixtures/data/employeeData.json');
const accountData = require ('../../fixtures/data/accountData.json');

describe('Tugas 3 - Basic UI Automation', () => {
  it('Positive - Add New Employee', () => {
    cy.visit('/')

    loginPage.inputLogin({});
    dashboardPage.verifyDashboard();
    pimPage.addNewEmployee(employeeData.employeeData1);
    adminPage.createAccount(accountData.accountData1);
    logoutPage.logout();
  })

  // it('Negative - Add New Employee', () => {
  //   cy.visit('/')

  //   loginPage.inputLogin(loginData.wrongCredentialLogin);
  //   // dashboardPage.verifyDashboard();
  //   // pimPage.addNewEmployee();
  //   // adminPage.createAccount();
  // })
})