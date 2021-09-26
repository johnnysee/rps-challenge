describe("users can visit application", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it ('is expected header to be RPS', () => {
    cy.get('[data-cy=header]').should('contain', 'Rock - Paper - Scissors')
  })

  it ('is expected to display User', () => {
    cy.get('[data-cy=user]').should('contain', 'User')
  })

  it ('is expected to display Computer', () => {
    cy.get('[data-cy=computer]').should('contain', 'Computer')
  })

  it ('is expected to display a button 1', () => {
    cy.get('[data-cy=rock]').click()
  })

  it ('is expected to display a button 2', () => {
    cy.get('[data-cy=paper]').click()
  })

  it ('is expected to display a button 3', () => {
    cy.get('[data-cy=scissor]').click()
  })


})