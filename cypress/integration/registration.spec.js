import faker from 'faker'

describe('Registration', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const name = faker.name.findName();
    const registerRoute = 'http://127.0.0.1:8000/register';
    const home = 'http://127.0.0.1:8000';

    it('goes to the registration page', () => {
        cy.visit(registerRoute);

        cy.url().should('contain', 'register');
    });

    // it('gives validation error', () => {
    //     cy.visit(registerRoute);
    //     cy.get('input[name=name]').type(faker.name.findName());
    //     cy.get('input[name=email]').type(email);
    //     cy.get('input[name=password]').type('123');
    //     cy.get('input[name=password_confirmation]').type('123');
    //     cy.get('button').contains('Agree & Join').click();
    //     cy.get('body').should('contain', 'The password must be at least 6 characters.');
    // });

    it('successfully registering', () => {
        cy.visit(registerRoute);
        cy.get('input[name=name]').type(name);
        cy.get('input[name=email]').type(email);
        cy.get('input[name=password]').type(password);
        cy.get('input[name=password_confirmation]').type(password);
        cy.get('button').contains('Agree & Join').click();
        cy.get('#navbarDropdown').should('contain', name);

        cy.url().should('contain', home);

        cy.get('#navbarDropdown').click();
        cy.contains('Logout').click();
    });
});
