describe('Function Junction Website', () => {
    it('loads to show the store hours', () => {
        cy.visit('http://localhost:8080/');

        cy.contains('Make an appointment');
        cy.contains('Mon - Thu 11am to 7pm');
        cy.screenshot();
    })
});