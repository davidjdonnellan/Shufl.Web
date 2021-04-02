context('Home Tests', () => {
    beforeEach(() => {
        cy.visit('');
    });
  
    it('home page track', () => {
        cy.get('div').contains('Random Album')
        cy.get('div').contains('Random Artist')
        cy.get('div').contains('Random Track')
    });

    

});
