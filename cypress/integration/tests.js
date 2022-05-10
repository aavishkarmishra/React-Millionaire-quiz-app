/// <reference types="cypress" />

describe('Millionare Quiz App Tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Check the landing page', () => {
    cy.get('input');
    cy.get('button');
  });

  context('Testing Quiz interface', () => {
    beforeEach(() => {
      cy.get('input').type('user01');
      cy.get('button').click();
    });

    it('Checking for the required components', () => {
      cy.get('ul.moneyList').children().should('have.length', 15);
      cy.get('.question');
      cy.get('.answers').children().should('have.length', 4);
    });

    it('Case 1 : Wrong  Answer Clicked', () => {
      cy.get('.answer').first().click();
      cy.get('.active').children().last().contains('$ 100');
      cy.wait(8000);
      cy.get('.endText').contains('You earned: $ 0');
    });
    it('Case 2 : Right Answer is Clicked', () => {
      cy.get('.answer').first().next().click();
      cy.wait(8000);
      cy.get('.active').children().last().contains('$ 200');
      cy.get('.answer').first().next().click();
      cy.wait(8000);
      cy.get('.endText').contains('You earned: $ 100');
    });
    it('Case 3 : Time Up!!', () => {
      cy.wait(30000);
      cy.get('.endText').contains('You earned: $ 0');
    });
  });
});
