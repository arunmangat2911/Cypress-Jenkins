/// <reference types="Cypress" />

Cypress.config('baseUrl','https://www.saucedemo.com/')

describe('Custom Command Test', function(){

    beforeEach(function(){
        cy.fixture('saucedemoLoginData').as('loginData')
    })

    it('Sauce demo-Valid Credentials', function() {
        cy.sauceDemoLogin(this.loginData.validEmail,this.loginData.validPassword)
        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    })

    it('Sauce demo-Invalid Credentials', function() {
        cy.sauceDemoLogin(this.loginData.invalidEmail,this.loginData.invalidPassword)
        cy.get('.error-message-container.error').should('contain','Epic sadface: Username and password do not match any user in this service')
    })
})
