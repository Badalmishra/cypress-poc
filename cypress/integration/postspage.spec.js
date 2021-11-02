describe("end to end test the posts page",()=>{
    it("renders correctly",()=>{
        cy.visit('/posts')
        cy.get("#posts").should('exist')
        
    })
    it("shows loading state",()=>{
        cy.get('#loading-grid').should('exist')
    })
    it("shows list from api data",()=>{
        cy.wait(5000)
        cy.get('#data-grid').should('exist')
    })
})