/// <reference types="Cypress" />

describe('Excel test', function(){

    var data;

    beforeEach(function(){
       data = cy.task('readXlsx',{file:'cypress/fixtures/saucedemoExcel.xlsx',sheet:'Sheet1'})
       .then((rows) => {
           data = rows
       })
    })

    it('Sauce demo-Valid Credentials', function() {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type(data[0].username)
        cy.get('input[id="password"]').type(data[0].password)
        cy.get('input[id="login-button"]').click()
        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    })

    it('Sauce demo-Invalid Credentials', function() {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type(data[1].username)
        cy.get('input[id="password"]').type(data[1].password)
        cy.get('input[id="login-button"]').click()
        cy.get('.error-message-container.error').should('contain','Epic sadface: Username and password do not match any user in this service')
    })
})
