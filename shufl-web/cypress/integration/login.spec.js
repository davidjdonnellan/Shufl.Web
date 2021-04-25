import {sizes} from './../support/viewports'
import {login} from './../support/actions'

describe('Login Tests', () => {
    beforeEach(() => {
        cy.visit('login');
    });
    sizes.forEach((size) => {
    
    it('Verify Navigation buttons - ' +size, () => {
        cy.viewport(size)
        cy.get('.close-button > svg').should('be.visible')
       
    });

    it('Verify Input fields - '+size, () => {
        cy.viewport(size)
        cy.get('#email').should('be.enabled')
        cy.get('#password').should('be.enabled')
        cy.get('app-loading-button')
    });

    it('Verify Back button - '+size, () => {
        cy.viewport(size)
        cy.get('.close-button > svg').click()
        cy.url().should('not.include', '/login/') 
        cy.get('div').contains('Random Album')
        cy.get('div').contains('Random Artist')
        cy.get('div').contains('Random Track')
    });

    it('Verify Back button - '+size, () => {
        cy.viewport(size)
        cy.get('.close-button > svg').click()
        cy.url().should('not.include', '/login/') 
        cy.get('div').contains('Random Album')
        cy.get('div').contains('Random Artist')
        cy.get('div').contains('Random Track')
    });

    it('Verify Invalid Email - '+size, () => {
        cy.viewport(size)
        cy.get('#email').type('dgsdfg325sdfgswd').blur()
        cy.get('.populated > .warning-label').contains('Email Invalid')
        cy.get('.button').should('be.disabled')
        cy.get('#password').type('ssdfgw6sg')
        cy.get('.button').should('be.disabled')
    });

    it('Verify Invalid Password - '+size, () => {
        cy.viewport(size)
        cy.get('#password').type('test').blur()
        cy.get('.populated > .warning-label').contains('Password must be at least 8 characters')
        cy.get('.button').should('be.disabled')
        cy.get('#password').type('testtest').blur()
        cy.get('.populated > .warning-label').should('not.be.visible')
    });
    //wip
    it.skip('Verify Login functionality - '+size, () => {
        login()
        
    });
    


})
});
