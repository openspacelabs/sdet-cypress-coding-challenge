import { MuiTextField, MonthLabel } from '../test data/TestData.js';

describe('DateRangePicker', () => {
  before(function () {
    cy.visit('/');
  });
  it('should dispaly the calendar', () => {
    cy.get(MuiTextField).eq(0).click();
    cy.get(MonthLabel)
      .should('contain', 'November 2022')
      .and('contain', 'December 2022');
  });

  it('should allow users to select an old date range', () => {
    cy.get('[data-testid="ArrowLeftIcon"]').eq(0).click();
    cy.get('[aria-label="Oct 2, 2022"]').eq(0).click();
    cy.get('[aria-label="Oct 7, 2022"]').click();
    cy.checkDatesFields('[value="10/02/2022"]', '[value="10/07/2022"]');
  });
  it('should allow users to navigate between the months', () => {
    cy.get('[data-testid="ArrowRightIcon"]').eq(1).click().click();
    cy.get(MonthLabel)
      .should('contain', 'December 2022')
      .and('contain', 'January 2023');
  });

  it('should allow users to select a date range', () => {
    cy.get('[aria-label="Jan 7, 2023"]').eq(0).click();
    cy.get('[aria-label="Jan 14, 2023"]').click();
    cy.checkDatesFields('[value="01/07/2023"]', '[value="01/14/2023"]');
  });

  it('should allow users to extend a selected date', () => {
    cy.get('body').click('bottomRight');
    cy.get(MuiTextField).eq(1).click();
    cy.get('[aria-label="Jan 28, 2023"]').click();
  });
});