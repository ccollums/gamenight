describe('about page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
    cy.get(':nth-child(3) > .links').click();
  })

  it('should contain developer details', () => {
    cy.get('.playing-game-img')
    .should('exist')
    cy.get('.Adam > .headshot')
    .should('exist');
    cy.get('.Kyra > .headshot')
    .should('exist');
    cy.get('.Carly > .headshot')
    .should('exist');
    cy.get('.Adam > .summary-section > .name')
    .should('exist')
    cy.get('.Carly > .summary-section > .name')
    .should('exist')
    cy.get('.Kyra > .summary-section > .name')
    .should('exist')
    cy.get('.Adam > .summary-section > .summary')
    .should('exist')
    cy.get('.Carly > .summary-section > .summary')
    .should('exist')
    cy.get('.Kyra > .summary-section > .summary')
    .should('exist')
  })

  it('should contain linkedin and github icons', () => {
    cy.get('.Adam > .summary-section > .personal-pages > .linkedin > svg')
    .should('exist')
    cy.get('.Kyra > .summary-section > .personal-pages > .linkedin > svg')
    .should('exist')
    cy.get('.Carly > .summary-section > .personal-pages > .linkedin > svg')
    .should('exist')
    cy.get('.Adam > .summary-section > .personal-pages > .github > svg')
    .should('exist')
    cy.get('.Kyra > .summary-section > .personal-pages > .github > svg')
    .should('exist')
    cy.get('.Carly > .summary-section > .personal-pages > .github > svg')
    .should('exist')
  })
})