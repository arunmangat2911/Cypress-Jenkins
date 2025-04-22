/// <reference types="Cypress" />

describe('Alert Functionality', function(){

    it('Simple Alert', function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Alert').click()
        //Event Listener
        cy.on('window:alert', (str) =>{
            expect(str).to.equal('I am a JS Alert')
        })
        cy.get('#result').should('contain', 'You successfully clicked an alert')
    })

    it('Confirmation Alert - OK button', function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str) =>{
            expect(str).to.equal('I am a JS Confirm')
        })
        cy.get('#result').should('contain', 'You clicked: Ok')
    })
    
    it('Confirmation Alert - Cancel button', function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.contains('Click for JS Confirm').click()
        cy.on('window:confirm', (str) =>{
            expect(str).to.equal('I am a JS Confirm')
            return false
        })
        cy.get('#result').should('contain', 'You clicked: Cancel')
    })

    it('Confirmation Alert - Prompt button', function() {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        cy.window().then(function(win){
            cy.stub(win, 'prompt').returns('Hello Prompt Alert')
            cy.contains('Click for JS Prompt').click()
        })
        cy.get('#result').should('contain', 'You entered: Hello Prompt Alert')
    })
})