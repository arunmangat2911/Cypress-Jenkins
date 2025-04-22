/// <reference types="Cypress" />

describe('Hooks Implementation', function(){
    beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')  
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()
    })
    
    it('Search in Admin tab with Username', function(){
        cy.contains('Admin').click()
        cy.xpath('(//input[@class="oxd-input oxd-input--active"])[2]').type('Admin')
        cy.get('button[type="submit"]').click()
    })

    it('Search in Admin tab with Employee name', function(){
        cy.contains('Admin').click()
        cy.get('input[placeholder="Type for hints..."]').type('Jobin Sam')
        cy.xpath('(//span[normalize-space()="Jobin Mathew Sam"])[1]').click()
        cy.get('button[type="submit"]').click()
        cy.xpath('//div[contains(text(),"Jobin Sam")]').contains('Jobin Sam').should('be.visible')
        
    })

    afterEach(function(){
        cy.get('.oxd-userdropdown-tab').click()
        cy.contains('Logout').click()
        
    })

})