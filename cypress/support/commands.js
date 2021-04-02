// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


//task2
Cypress.Commands.add('createIssue', (issueName) => {
    cy.get('[data-testid="icon:plus"]').click()
    
    cy.get('[name="title"]').type(issueName)
    //Priority
    cy.get('[data-testid="select:priority"]').click()
    cy.get('[data-testid="select-option:Highest"]').click()

    //submit
    cy.get('[type="submit"]').click()
    cy.contains('Issue has been successfully created.').should('be.visible')
    
})

//task 3 - delete issue
Cypress.Commands.add('deleteIssue', (issueName) => {
        
    cy.contains(issueName).click()
    //Priority
    cy.get('[data-testid="icon:trash"]').click()
    cy.contains('Delete issue').click()

})

//task 3 - create comment
Cypress.Commands.add('createComment', (issueName, comment) => {
    cy.contains(issueName).click()
    
    cy.contains('Add a comment...').type(comment)
    cy.contains('Save').click()
    
    cy.contains(comment).should('be.visible')
    cy.get('.sc-bdVaJa.fuyACr').click()
})

//task 3 - delete comment
Cypress.Commands.add('deleteComment', (issueName,comment) => {
    cy.contains(issueName).click()
    
    cy.contains(comment).parent().cy.contains('Delete').click()
    cy.contains('Delete comment').click()
   
})

//task 3 - edit comment
Cypress.Commands.add('editComment', (issueName, comment) => {
    
    cy.contains(issueName).click()
    cy.contains(comment).parent().cy.contains('Edit').click()
    cy.get('textarea').clear().type('new comment')
    cy.contains('Save').click()
    
})