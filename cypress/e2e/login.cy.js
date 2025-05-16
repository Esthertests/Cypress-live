describe('Login Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/login');
    });
    
    it('should display the login form', () => {
        cy.get('form').should('exist');
        cy.get('input[name="email"]').should('exist');
        cy.get('input[name="password"]').should('exist');
        cy.get('button[type="submit"]').should('exist');
    });
    
});