context('Search Tests', () => {
    beforeEach(() => {
        cy.visit('search');
    });
  
    it('Search Bar', () => {
        cy.get('.card').contains('Albums').should('be.visible')

    });

    it('Search Album', () => {
        cy.get('#searchInput').type('Test')

    });

});
