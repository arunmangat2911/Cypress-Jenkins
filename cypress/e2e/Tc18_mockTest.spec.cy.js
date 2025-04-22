/// <reference types="Cypress" />   

describe('Mock Test', function () {

    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').type('Admin')
        cy.get('input[name="password"]').type('admin123')
        cy.get('button[type="submit"]').click()

    })
    
    xit('Location Mock', function () {
        cy.intercept('GET', '/api/v2/dashboard/employees/locations', {fixture:'location.json'})
        cy.contains('Employee Distribution by Location').should('be.visible')
        cy.get('.oxd-chart-legend').should('contain','ArunTest').and('contain','LocationNew')
    })

    xit('Personal Details Mock', function () {
        cy.intercept('GET', '**/api/v2/pim/employees/7/personal-details', {fixture:'personal-details.json'})
        cy.contains('Employee Distribution by Location').should('be.visible')
        cy.contains('My Info').click()
        cy.get('.orangehrm-edit-employee-name').should('contain','SecondLastNameCy').and('contain','SecondFirstNameCy')


    })

    xit('Login Mock', function () {



    })

})




