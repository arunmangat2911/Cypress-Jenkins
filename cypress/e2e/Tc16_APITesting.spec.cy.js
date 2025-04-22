/// <reference types="Cypress" />

describe('API Testing', function(){

    it('GET API Testing', function() {
        cy.request('GET','https://reqres.in/api/users?page=2').then((response) => {
            expect(response.status).equal(200)
            expect(response.body.data[1].first_name).equal('Lindsay')
        })
    })

    it('POST API Testing', function() {
        var user = {
            "name": "Arun",
            "job": "Tester"
        }
        cy.request('POST','https://reqres.in/api/users',user).then((response) => {
            expect(response.status).equal(201)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })

    it('PUT API Testing', function() {
        var user = {
            "name": "Arun",
            "job": "Developer"
        }
        cy.request('PUT','https://reqres.in/api/users/2',user).then((response) => {
            expect(response.status).equal(200)
            expect(response.body.name).equal(user.name)
            expect(response.body.job).equal(user.job)
        })
    })

    it('DELETE API Testing', function() {
        cy.request('DELETE','https://reqres.in/api/users/2').then((response) => {
            expect(response.status).equal(204)
        })
    })

})