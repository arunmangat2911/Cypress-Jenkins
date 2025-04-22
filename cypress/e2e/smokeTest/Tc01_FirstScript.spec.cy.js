/// <reference types="Cypress" />

Cypress.config('baseUrl','https://www.saucedemo.com/')

describe('Login Functionality', function(){

    it('Login Test using Conduit', function() {
        cy.visit('/')
        cy.get('input[id="user-name"]').type('standard_user')
        cy.get('input[id="passworddd"]').type('secret_sauce')
        cy.get('input[id="login-button"]').click()
        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    })
})
