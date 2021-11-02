describe("renders the home page",()=>{
    it("renders correctly",()=>{
        cy.visit('/about')
        cy.get("#about").should('exist')
    })
})