/// <reference types="Cypress" />

describe('jira clone', () => {
    before(() =>{
      cy.visit('https://jira-clone.mad.itera.no/project/board')

    })


    it('should be able to create a new issue', () => {
      // Here you will write the test
        cy.get('[data-testid="icon:plus"]').click()

        //Issue type
        cy.get('[data-testid="select:type"]').click()
        cy.get('[data-testid="select-option:Story"]').click()

        //Short summary
        cy.get('[name="title"]').type("Bigg error")

        //Description of form
        cy.get('.ql-editor.ql-blank').type("Bigg error with this isue")

        //Reporter
        cy.get('[data-testid="select:reporterId"]').click()
        cy.get('[data-testid="select-option:Baby Yoda"]').click()

        //Assignees
        cy.get('[data-testid="select:userIds"]').click()
        cy.get('[data-testid="select-option:Pickle Rick"]').click()

        //Priority
        cy.get('[data-testid="select:priority"]').click()
        cy.get('[data-testid="select-option:Highest"]').click()

        //submit
        cy.get('[type="submit"]').click()
        cy.contains('Issue has been successfully created.').should('be.visible')
        
    })


   
  
    
})