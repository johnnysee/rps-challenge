describe("users can visit application", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it ('is expected true to be true', () => {
    cy.get('[data-cy=header]').should('contain', 'Rock - Paper - Scissors')
  })

  it ('is expected true to be true', () => {
    cy.get('[data-cy=user]').should('contain', 'User')
  })

  it ('is expected true to be true', () => {
    cy.get('[data-cy=computer]').should('contain', 'Computer')
  })


})