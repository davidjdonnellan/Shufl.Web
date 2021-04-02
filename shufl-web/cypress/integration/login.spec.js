import {sizes} from './../support/viewports'

describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('/login');
    });
    sizes.forEach((size) => {

    it('Verify Navigation buttons - ' +size, () => {
        cy.get('.close-button > svg').should('be.visible')
       
    });

    it('Verify Input fields - '+size, () => {
        cy.get('#email').should('be.enabled')
        cy.get('#password').should('be.enabled')
        cy.get('app-loading-button')
    });

    it('Verify Back button - '+size, () => {
        cy.get('.close-button > svg').click()
        cy.url().should('not.include', '/login/') 
        cy.get('div').contains('Random Album')
        cy.get('div').contains('Random Artist')
        cy.get('div').contains('Random Track')
    });

    it('Verify Back button - '+size, () => {
        cy.get('.close-button > svg').click()
        cy.url().should('not.include', '/login/') 
        cy.get('div').contains('Random Album')
        cy.get('div').contains('Random Artist')
        cy.get('div').contains('Random Track')
    });


    //wip
    it.skip('Verify Login functionality - '+size, () => {
        cy.get('#email').type('davidd294@gmail.com')
        cy.get('#password').type('Password1')
        cy.get('.button').click()
        cy.intercept('POST','/Auth/auth',{
            statusCode: 200,

        })
    });
    


})
});
