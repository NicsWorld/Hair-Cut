import faker from 'faker'

describe('Barber Registration', () => {
    const email = faker.internet.email();
    const password = faker.internet.password();
    const name = faker.name.findName();
    const zipCode = '12345';
    const registerRoute = 'http://127.0.0.1:8000/barber/register';
    const home = 'http://127.0.0.1:8000';

    it('goes to the barber registration page', () => {
        cy.visit(registerRoute);

        cy.url().should('contain', 'barber/register');
    });

    it('successfully registering', () => {
        cy.visit(registerRoute);
        cy.get('input[name=name]').type(name);
        cy.get('input[name=zip_code]').type(zipCode);
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
