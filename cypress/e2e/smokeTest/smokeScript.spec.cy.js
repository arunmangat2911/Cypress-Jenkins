/// <reference types="Cypress" />

describe('Login Functionality', function(){

    it('Login Test using Conduit', function() {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type('standard_user')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[id="login-button"]').click()
        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    })
})
