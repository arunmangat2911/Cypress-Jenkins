/// <reference types="Cypress" />

const neatCSV = require('neat-csv')

describe('CSV test', function(){

    var table;

    beforeEach(function(){
        cy.fixture('sauceDemoCsv.csv')
        .then(neatCSV)
        .then(data => {
            table = data
        })
    })

    it('Sauce demo-Valid Credentials', function() {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type(table[0].username)
        cy.get('input[id="password"]').type(table[0].password)
        cy.get('input[id="login-button"]').click()
        cy.get('button[id="react-burger-menu-btn"]').click()
        cy.get('a[id="logout_sidebar_link"]').click()
    })

    it('Sauce demo-Invalid Credentials', function() {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type(table[1].username)
        cy.get('input[id="password"]').type(table[1].password)
        cy.get('input[id="login-button"]').click()
        cy.get('.error-message-container.error').should('contain','Epic sadface: Username and password do not match any user in this service')
    })
})
