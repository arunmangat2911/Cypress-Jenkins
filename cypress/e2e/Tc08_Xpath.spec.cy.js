/// <reference types="Cypress" />

describe('Xpath Functionality', function(){

    it('Login Test using Conduit by Xpath locators', function() {
        cy.visit('https://www.saucedemo.com/')
        cy.xpath('//input[@id="user-name"]').type('standard_user')
        cy.xpath('//input[@id="password"]').type('secret_sauce')
        cy.xpath('//input[@id="login-button"]').click()
        cy.xpath('//button[@id="react-burger-menu-btn"]').click()
        cy.xpath('//a[@id="logout_sidebar_link"]').click()
    })
})
