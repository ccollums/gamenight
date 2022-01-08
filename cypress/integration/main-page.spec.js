describe('main page',() => {
  beforeEach(() => {
    cy.fixture('./games.json').then((allGames) => {
      cy.intercept('GET', 'https://api.boardgameatlas.com/api/search?order_by=rank&ascending=false&client_id=DSHOCsJGeA', {
        statusCode: 200,
        body: allGames
      })
    cy.visit('http://localhost:3000/');
  })
})

  it('should contain a header', () => {
    cy.contains('h1', 'gamenight')
  })

  it('When data is put into the form, the value is reflected in that form input', () => {
    cy.get('.game-night-form')
      .get('input[name="date"]').type('12/15/2021')
      .get('input[name="location"]').type('Coffee Shop')
      .get('input[name="players"]').type('Adam, Kyra, Carl')
      
      cy.get('input[name="date"]').should('have.value', '12/15/2021')
      cy.get('input[name="location"]').should('have.value', 'Coffee Shop')
      cy.get('input[name="players"]').should('have.value', 'Adam, Kyra, Carl')
  });

  it('When a user fills out and submits the game night form, a game night card is rendered', () => {
    cy.get('form')
      .get('input[name="date"]').type('12/15/2021')
      .get('input[name="location"]').type('Coffee Shop')
      .get('input[name="players"]').type('Adam, Kyra, Carl')
      .get("button").click();
    
    cy.get('.game-container')
      .get('p').contains("12/15/2021")
      .get('p').contains("Coffee Shop")
      .get('form').contains('Select Game')
      .get('form').contains('Select Winner')
  })

  it('When a user selects a game and a game winner, a game card is rendered', () => {
    cy.get('form')
      .get('input[name="date"]').type('12/15/2021')
      .get('input[name="location"]').type('Coffee Shop')
      .get('input[name="players"]').type('Adam, Kyra, Carl')
      .get("button").click();
    cy.get('.game-container')
      .get('.game-play-form')
      .get('select').eq(0).should('have.value', 'Select Game')
      .get('select').eq(1).should('have.value', 'Select Winner')

      // .get('input[name="date"]').type('12/15/2021')
      // .get('input[name="location"]').type('Coffee Shop')
      // .get('input[name="players"]').type('Adam, Kyra, Carl')
      // .get("button").click();
    
    // cy.get('.game-container')
    //   .get('p').contains("12/15/2021")
    //   .get('p').contains("Coffee Shop")
    //   .get('form').contains('Select Game')
    //   .get('form').contains('Select Winner')
  })

})