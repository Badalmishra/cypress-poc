describe("renders the home page",()=>{
    it("renders correctly",()=>{
        cy.visit('/')
        cy.get("#home").should('exist')
    })
})