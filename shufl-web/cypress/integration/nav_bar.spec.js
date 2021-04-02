import {sizes} from './../support/viewports'
context('Navbar Tests', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    sizes.forEach((size) => {
    it('Home Tab '+size, () => {
        cy.get('#homeTab').contains('Home').click()
        
    });
    it('Search Tab '+size, () => {
        cy.get('#searchTab').contains('Search').click()
        cy.url().should('include', '/search') 
    });
    it('Groups Tab No Login '+size, () => {
        cy.get('#groupTab').contains('Groups').click()
        cy.url().should('include', '/login') 
    });

    it('Groups Tab Login '+size, () => {
        cy.get('#groupTab').contains('Groups').click()
        // cy.url().should('not.include', '/login') 
        //cy.url().should('not.include', '/group') 
    });
})
});
