import faker from 'faker'

describe('Barber Login', () => {
    const email = 'testbarber@test.com';
    const password = 'flowers';
    const loginRoute = 'http://127.0.0.1:8000/login';
    const home = 'http://127.0.0.1:8000';

    it('successfull login page load', () => {
        cy.visit(loginRoute);

        cy.url().should('contain', 'login');
    });

    it('successfull login', () => {
        cy.visit(loginRoute);
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(password);
        cy.get('button').contains('Login').click();
        cy.get('#navbarDropdown').should('contain', name);

        cy.url().should('contain', home);

        cy.get('#navbarDropdown').click();
        cy.contains('Logout').click();
    });
});
