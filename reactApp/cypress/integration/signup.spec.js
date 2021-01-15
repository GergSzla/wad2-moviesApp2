/* eslint-disable */
describe("Sign Up", () => {
    before(() => {
        cy.visit("/signup")
        cy.wait(1000)
    });

    describe("Layout Test", () => {
        it("Should Display Header", () => {
            cy.get('#headerSU').contains("Register");
        });
        it("Should Display Fields", () => {
            cy.get('#unFieldSU').should('be.visible');
            cy.get('#pwFieldSU').should('be.visible');
            cy.get('#pwReFieldSU').should('be.visible');
        });
        it("Should Display Button", () => {
            cy.get('#btnReg').should('be.visible');
        });
    })

    describe("Sign Up", () => {
        it("Should Create New User", () => {
            cy.get("#unFieldSU").type("test-user1");
            cy.get("#pwFieldSU").type("testpassword1");
            cy.get("#pwReFieldSU").type('testpassword1');
            cy.get("#btnReg").click()
        });
        it("Should Redirect To Login", () => {
            cy.location('pathname').should('eq', '/login')
        });
    })
})