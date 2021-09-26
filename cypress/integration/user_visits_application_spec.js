describe("users can visit application", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it ('is expected header to be RPS', () => {
    cy.get('[data-cy=header]').should('contain', 'Rock - Paper - Scissors')
  })

  it ('is expected to display User', () => {
    cy.get('[data-cy=user]').should('contain', "User's choose")
  })

  it ('is expected to display Computer', () => {
    cy.get('[data-cy=computer]').should('contain', 'Computer')
  })

  it ('is expected to display a button Rock', () => {
    cy.get('[data-cy=rock]').should('contain', 'Rock')
  })

  it ('is expected to display a button Paper', () => {
    cy.get('[data-cy=paper]').should('contain', 'Paper')
  })

  it ('is expected to display a button Scissors', () => {
    cy.get('[data-cy=scissors]').should('contain', 'Scissors')
  })


})