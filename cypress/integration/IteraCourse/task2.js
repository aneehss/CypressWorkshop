/// <reference types="Cypress" />

describe('jira clone', () => {
    before(() =>{
      cy.visit('https://jira-clone.mad.itera.no/project/board')

    })


    it('should be able to create a new issue', () => {
        cy.createIssue('Not big issue')
        cy.contains('Not big issue').click()

        cy.contains('Highest').click()
        cy.contains('Lowest').click()

        //cy.get('[data-testid="modal:issue-details"]').click('topRight')
        cy.get('.sc-bdVaJa.fuyACr').click()

    })
})