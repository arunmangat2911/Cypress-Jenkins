/// <reference types="Cypress" />

describe('Checkbox Functionality', function(){

    it('Handling different Checkboxes', function() {

        //Basic Checkbox button
        cy.visit('https://demos.jquerymobile.com/1.4.5/checkboxradio-checkbox/')
        cy.get('#checkbox-v-2a').should('not.be.checked').check({force: true}).should('be.checked')
        cy.get('#checkbox-v-2c').should('not.be.checked').check({force: true}).should('be.checked')
    })
})
