/// <reference types="Cypress" />

describe('Login with Mocked API Response', () => {
    it('should log in successfully using a mocked response', () => {
      // Stub API response
      cy.intercept('POST', '**/api/users/login', {  // Use '**' as a wildcard
        statusCode: 200,
        body: {
          user: {
            email: 'testuser@example.com',
            token: 'fake-token',
            username: 'testuser',
          },
        },
      }).as('mockLogin');
      
  
      // Visit the app
      cy.visit('https://react-redux.realworld.io/#/login');
  
      // Fill out login form
      cy.get('input[type="email"]').type('testuser@example.com');
      cy.get('input[type="password"]').type('password');
      cy.get('button[type="submit"]').click();
  
      // Wait for the mocked API call
      cy.wait('@mockLogin');
  
      // Assert successful login (replace with actual selectors from app)
      cy.get('.nav-link').contains('testuser').should('be.visible');
    });
  });
  