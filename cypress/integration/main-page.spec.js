describe('main page',() => {
  beforeEach(() => {
    cy.fixture('./games.json').then((allGames) => {
      cy.intercept('GET', 'https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=DSHOCsJGeA', {
        statusCode: 200,
        body: allGames
      })
    cy.visit('http://localhost:3000/');
  })

  cy.get('.game-night-form')
      .get('input[name="date"]').type('12/15/2021')
      .get('input[name="location"]').type('Coffee Shop')
      .get('input[name="players"]').type('Adam, Kyra, Carl')
  })

  // Add test for Home, Games and About tabs
  // Add separate spec file for Games and About
  // Test for games and about should start with clicking on the link from the main page
  // and testing that the data has populated upon the click

  it('should contain a header', () => {
    cy.contains('h1', 'gamenight')
  })

  it('When data is put into the form, the value is reflected in that form input', () => {
    cy.get('input[name="date"]').should('have.value', '12/15/2021')
    cy.get('input[name="location"]').should('have.value', 'Coffee Shop')
    cy.get('input[name="players"]').should('have.value', 'Adam, Kyra, Carl')
  });

  it('When a user fills out and submits the game night form, a game night card is rendered', () => {
    cy.get(".game-night-form > button").click();
    
    cy.get('.game-container')
      .get('p').contains("12/15/2021")
      .get('p').contains("Coffee Shop")
      .get('form').contains('Select Game')
      .get('form').contains('Select Winner')
  })

  it.only('A game play form should contain the players and available games', () => {
    cy.get(".game-night-form > button").click();
    
    cy.get('.game-container')
      .get('.game-play-form')
      .get('input[name="game"]').should('have.value', 'Select Game')
      .get('select').eq(1).should('have.value', 'Select Winner')
      .get('select').eq(0).select('Gloomhaven').should('have.value', 'Gloomhaven')
      .get('select').eq(1).select('Adam').should('have.value', 'Adam')
      .get('select').eq(1).select('Kyra').should('have.value', ' Kyra')
      .get('select').eq(1).select('Carl').should('have.value', ' Carl')
  })

  it('When a user selects a game and a game winner, a game card displaying the game image and winner is rendered', () => {
    cy.get("button").click();

    cy.get('.game-container')
      .get('.game-play-form')
      .get('select').eq(0).select('Gloomhaven')
      .get('select').eq(1).select('Kyra')
      .get('.game-play-form').find("button").click()
      .get('.game-card').find('img').should('have.attr', 'alt').should('include', 'Gloomhaven')
      .get('.game-card').contains('Kyra')
  })

  it('The standings should reflect the game winner', () => {
    cy.get("button").click();

    cy.get('.game-container')
      .get('.game-play-form')
      .get('select').eq(0).select('Gloomhaven')
      .get('select').eq(1).select('Kyra')
      .get('.game-play-form').find("button").click()
      .get('.standings').contains('kyra')
  })

})