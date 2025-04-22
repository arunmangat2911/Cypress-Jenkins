/// <reference types="Cypress" />

describe('Browser Controls', function(){
    it('Browser Controls', function() {
        cy.visit('https://www.saucedemo.com/')
        cy.get('input[id="user-name"]').type('standard_user')
        cy.get('input[id="password"]').type('secret_sauce')
        cy.get('input[id="login-button"]').click()
        cy.get('#item_4_title_link').click()
        cy.go('back')
        cy.go('forward')
        cy.go(-1)
        cy.go(+1)
        cy.get('#add-to-cart').click()
        cy.get('#remove').contains('Remove')
        cy.reload()



        })

})