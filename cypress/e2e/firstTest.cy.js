describe('My First Cypress Test', () => {
  it('Visits the Cypress documentation page', () => {
    cy.visit('https://docs.cypress.io')
    cy.contains('Get Started').click()
    cy.url().should('include', '/docs')
  })
})