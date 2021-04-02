
const sizes = [
        'ipad-2',
        'ipad-mini',
        'iphone-3	',
        'iphone-4',
        'iphone-5',
        'iphone-6',
        'iphone-6+',
        'iphone-7',
        'iphone-8',
        'iphone-x',
        'iphone-xr',
        'iphone-se2',
        'macbook-11',
        'macbook-13',
        'macbook-15',
        'macbook-16',
        'samsung-note9',
        'samsung-s10,'
    ]

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
