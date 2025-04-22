/// <reference types="Cypress" />

describe('Dropdown Functionality', function(){

    it('Handling Static Dropdown', function() {
        cy.visit('https://seleniumbase.io/demo_page')
        cy.get('#mySelect').select('Set to 100%').should('have.value', '100%')
        
    })

    it('Handling Dynamic Dropdown', function() {
        cy.visit('https://demos.telerik.com/aspnet-ajax/dropdownlist/examples/overview/defaultcs.aspx')
        cy.get('#ctl00_ContentPlaceholder1_RadDropDownProducts').click()
        cy.get('.rddlItem').contains('Teatime Chocolate Biscuits').click()
        
    })

    it('Handling Multiple Dropdown', function() {
        cy.visit('https://demo.mobiscroll.com/select/multiple-select')
        cy.get('#multiple-select-input').click({force: true})
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Movies, Music & Games').click({force: true})
        cy.get('div[class="mbsc-scroller-wheel-item mbsc-ios mbsc-ltr mbsc-wheel-item-checkmark mbsc-wheel-item-multi"]').contains('Health & Beauty').click({force: true})
    })
})
