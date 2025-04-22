/// <reference types="Cypress" />

describe('Advanced UI Elements', function(){

    it('Web table', function() {
        cy.visit('https://the-internet.herokuapp.com/tables')

        //1. Check value present anywhere in the table
        cy.get('#table1').contains('td','http://www.jdoe.com').should('be.visible')

        //2. Check value present in specific row and column
        cy.get('#table1>tbody>tr:nth-child(1)>td:nth-child(3)').contains('td','jsmith@gmail.com').should('be.visible')

        //3. Check value based on condition
        cy.get('#table1>tbody>tr>td:nth-child(2)').each(($e, index, $list)=>{
            const text = $e.text();
            if(text.includes('Jason')){
                cy.get('#table1>tbody>tr>td:nth-child(4)').eq(index).then(function(due){
                    const dueAmount = due.text();
                    expect(dueAmount).to.equal('$100.00')
                })
            }
        })
    })
})    