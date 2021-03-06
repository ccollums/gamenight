import dayjs from 'dayjs';

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
      .get('input[name="date"]').log(dayjs().format('YYYY-M-DD'))
      .get('input[name="location"]').type('Coffee Shop')
      .get('input[name="players"]').type('Adam, Kyra, Carl')
  })

  it('standings and game nights should be blank if no games have been played', () => {
    cy.get('.ranks > p')
      .contains('Currently no standings. Play some games!')
    cy.get('.empty-container-msg')
      .contains('No game nights yet, start one above!')
  })

  it('should contain a header', () => {
    cy.contains('h1', 'gamenight')
  })

  it('When incomplete data is put into the form, an error message appears', () => {
    cy.get('input[name="players"]').clear()
    cy.get(".game-night-form > button").click();
    cy.get('.game-night-form > p')
      .contains('Please fill out all fields!')
  });

  it('When incomplete data is put into the game winner form, an error message appears', () => {
    cy.get(".game-night-form > button").click();
    cy.get('.game-container')
      .get('.game-play-form')
      .get('[name="game"]').eq(0).select('Gloomhaven')
      .get('.game-play-form').find("button").click()

    cy.get('.game-play-form > p')
      .contains('Please select an option from all fields!')
  });

  it('When data is put into the form, the value is reflected in that form input', () => {
    cy.get('input[name="date"]').should('have.value', (dayjs().format('YYYY-MM-DD')))
    cy.get('input[name="location"]').should('have.value', 'Coffee Shop')
    cy.get('input[name="players"]').should('have.value', 'Adam, Kyra, Carl')
  });

  it('When a user fills out and submits the game night form, a game night card is rendered', () => {
    cy.get(".game-night-form > button").click();
    
    cy.get('.game-container')
    cy.get('.date-location > :nth-child(1)').contains((dayjs().format('M/DD/YYYY')))
      .get('p').contains("Coffee Shop")
      .get('form').contains('Game')
      .get('form').contains('Winner')
  })

  it('A game play form should contain the players and available games', () => {
    cy.get(".game-night-form > button").click();
    
    cy.get('.game-container')
      .get('.game-play-form')
      .get('[name="game"]').contains('Game')
      .get('select').eq(1).should('have.value', 'Winner')
      .get('select').eq(0).select('Gloomhaven').should('have.value', 'Gloomhaven')
      .get('select').eq(1).select('Adam').should('have.value', 'Adam')
      .get('select').eq(1).select('Kyra').should('have.value', 'Kyra')
      .get('select').eq(1).select('Carl').should('have.value', 'Carl')
  })

  it('When a user selects a game and a game winner, a game card displaying the game image and winner is rendered', () => {
    cy.get(".game-night-form > button").click();

    cy.get('.game-container')
      .get('.game-play-form')
      .get('[name="game"]').eq(0).select('Gloomhaven')
      .get('select').eq(1).select('Kyra')
      .get('.game-play-form').find("button").click()
      .get('.game-card').find('img').should('have.attr', 'alt').should('include', 'Gloomhaven')
      .get('.game-card').contains('kyra')
  })

  it('The standings should reflect the game winner', () => {
    cy.get(".game-night-form > button").click();

    cy.get('.game-container')
      .get('.game-play-form')
      .get('select').eq(0).select('Gloomhaven')
      .get('select').eq(1).select('Kyra')
      .get('.game-play-form').find("button").click()
      .get('.standings').contains('kyra')
  })
})