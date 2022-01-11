describe('about page', () => {
  beforeEach(() => {
    cy.fixture('./games.json').then((allGames) => {
      cy.intercept('GET', 'https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=DSHOCsJGeA', {
        statusCode: 200,
        body: allGames
      })
      cy.visit('http://localhost:3000/');
      cy.get(':nth-child(2) > .links').click();
    })
  })

  it('should visit games page and render games', () => {
    cy.contains('Gloomhaven')
      .should('be.visible')
    cy.contains('Root')
      .should('be.visible')
  })

  it('should include game details', () => {
    cy.get(':nth-child(1) > .button-container > .game-page-images')
      .should('be.visible')
    cy.get(':nth-child(1) > .game-details > .game-name')
      .should('be.visible')
    cy.get(':nth-child(1) > .game-details > .game-price')
      .should('be.visible')
    cy.get(':nth-child(1) > .game-details > :nth-child(3)')
      .should('be.visible')
  })

  it('should contain a buy button to purchase game', () => {
    cy.get(':nth-child(1) > .button-container > .buy-button')
      .should('exist');
  })
})