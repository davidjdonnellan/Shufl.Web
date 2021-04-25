
export function login(){
    const username = Cypress.env('username')
    const password = Cypress.env('password')
    cy.get('#email').type(username)
    cy.get('#password').type(password)
    cy.get('.button').click()

}
