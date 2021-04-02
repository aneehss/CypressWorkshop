/// <reference types="cypress" />

describe('jira clone', () => {
    before(() =>{
        cy.visit('https://jira-clone.mad.itera.no/project/board')
        
      })
    
    beforeEach(() => {
       // create issue
        cy.createIssue('Not big issue')
        
    })
  
    afterEach(() => {
       // delete issue
      // cy.deleteIssue('Not big issue')
       cy.contains('Not big issue').click()
        //Priority
        cy.get('[data-testid="icon:trash"]').click()
        cy.contains('Delete issue').click()
    })
  
    it('should be able to create comment', () => {
      // create comment
      cy.createComment('Not big issue', 'this is a comment')
    })
  
    it('should be able to delete comment', () => {
      // create comment 
      cy.createComment('Not big issue', 'this is a second comment')

      // delete comment
      //cy.deleteComment('Not big issue', 'this is a comment')
        cy.contains('Not big issue').click()
        cy.contains('this is a comment').parent().contains('Delete').click()
        cy.contains('Delete comment').click()
    })  
  
    it('should be able to edit comment', () => {
      // create comment
      // edit comment 
    })
  })