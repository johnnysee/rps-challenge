describe("users can visit application", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it ('is expected header to be RPS', () => {
    cy.get('[data-cy=header]').should('contain', 'Rock - Paper - Scissors')
  })

  it ('is expected to display User', () => {
    cy.get('[data-cy=user]').should('contain', "You choose")
  })

  it ('is expected to display Computer', () => {
    cy.get('[data-cy=computer]').should('contain', 'Computer')
  })

  it ('is expected to display a button Rock', () => {
    cy.get('[data-cy=btn]').should('contain', 'ROCK')
  })
  it ('is expected to display a button Paper', () => {
    cy.get('[data-cy=btn]').should('contain', 'PAPER')
  })
  it ('is expected to display a button Scissors', () => {
    cy.get('[data-cy=btn]').should('contain', 'SCISSORS')
  })
})