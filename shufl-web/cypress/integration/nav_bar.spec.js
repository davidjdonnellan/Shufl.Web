import {sizes} from './../support/viewports'
context('Navbar Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    sizes.forEach((size) => {
    //need to update nav component with cy-data tag eg 
    it.skip('Home Tab '+size, () => {
        cy.get('[data-cy=homeItem]').contains('Home').click()
        
    });
    //need to update nav component with cy-data tag
    it.skip('Search Tab '+size, () => {
        cy.get('[data-cy=searchItem]').contains('Search').click()
        cy.url().should('include', '/search') 
    });
    //need to update nav component with cy-data tag
    it.skip('Groups Tab No Login '+size, () => {
        cy.get('[data-cy=groupItem]').contains('Groups').click()
        cy.url().should('include', '/login') 
    });

    it('Groups Tab Login '+size, () => {
        cy.get(':nth-child(4) > .nav-bar-item').contains('Groups').click()
        cy.url().should('include', '/login') 
        cy.get('#email').type('davidd294@gmail.com')
        cy.get('#password').type('Password1')
        cy.get('.button').click()
        cy.get(':nth-child(4) > .nav-bar-item').contains('Groups').click()
        cy.url().should('include', '/groups') 
    });
})
});
