/// <reference types="Cypress" />

describe('Iframes', function(){

    it('Iframes', function() {
        cy.visit('https://the-internet.herokuapp.com/iframe')
        cy.get('#mce_0_ifr').within(function($iframe){
            const element = $iframe.contents().find('#tinymice')
            cy.wrap(element).clear().type('Hello World')
        })
    })
})