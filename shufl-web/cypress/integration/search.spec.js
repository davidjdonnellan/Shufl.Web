context('Search Tests', () => {
    beforeEach(() => {
        cy.visit('search');
    });
  
    it('Search Bar', () => {
        cy.get('.card').contains('Search').should('be.visible')

    });
    // need data-cy tag for input
    it('Search Artist', () => {
        cy.get('body > app-root > div > div.stage > app-search > div > div > div.search-bar-container > form > div > div > input')
        .type('Kaleo')
        cy.get('app-artist-search-results-container > .search-results-container').contains('Artists')
        cy.get('app-album-search-results-container > .search-results-container').contains('Albums')
    });

    it('Search Album', () => {
        cy.get('body > app-root > div > div.stage > app-search > div > div > div.search-bar-container > form > div > div > input')
        .type('Hozier')
        cy.get('app-artist-search-results-container > .search-results-container').contains('Artists')
        cy.get('app-album-search-results-container > .search-results-container').contains('Albums')
        cy.get(':nth-child(1) > .artist-search-result-container').click()
        cy.get('.album-link').contains('Wasteland, Baby!').click()
    });


});
