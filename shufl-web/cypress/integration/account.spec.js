import {sizes} from './../support/viewports'
import {login} from './../support/actions'

describe('Account Page Tests', () => {
    beforeEach(() => {
        cy.visit('account');
        login()
        
    });
     sizes.forEach((size) => {
    it('Verify Account Page Logout Button - ' +size, () => {
       cy.get('.close-button > svg').should('be.visible')
    //    cy.get('span').contains('Log Out')
       
       
    });
    it('Verify Account Name - ' +size, () => {
        cy.get('h1').contains('David Darling')
        
     });

   

})
});
