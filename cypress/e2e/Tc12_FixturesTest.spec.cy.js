/// <reference types="Cypress" />

describe('Login Functionality', function () {

    beforeEach(function () {
        cy.fixture('saucedemoLoginData').as('loginData')
    })

    it('Sauce demo-Valid Credentials', function () {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type(this.loginData.validEmail)
        cy.get('input[id="password"]').type(this.loginData.validPassword)
        cy.get('input[id="login-button"]').click()
        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    })

    it('Sauce demo-Invalid Credentials', function () {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type(this.loginData.invalidEmail)
        cy.get('input[id="password"]').type(this.loginData.invalidPassword)
        cy.get('input[id="login-button"]').click()
        cy.get('.error-message-container.error').should('contain', 'Epic sadface: Username and password do not match any user in this service')
    })
})





