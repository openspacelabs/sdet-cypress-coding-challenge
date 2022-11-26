import { MuiTextField, MonthLabel } from '../test data/TestData.js';

import dayjs = require('dayjs');

let now = dayjs()
let NextDay = now.add(1,'Day')
let PrevDay= now.subtract(1,'Day')
let NextMonth = now.add(1,'M')
let NextMonth2 = now.add(2,'M')
let FutureDate = now.add(5,'Days')

describe('DateRangePicker', () => {

  before(function () {
    cy.visit('/');
  });

  it('should dispaly the calendar', () => {
    cy.get(MuiTextField).first().type(now.format('MM/DD/YYYY')).type('{enter}');
    cy.get(MonthLabel)
      .should('contain',now.format('MMMM YYYY') )
      .and('contain', NextDay.format('MMMM'));
  });

  it('should allow users to select an old date range', () => {
    cy.reload()
    cy.get(MuiTextField)
      .first()
      .click()
    cy.get(`[aria-label="${PrevDay.format('MMM D, YYYY')}"]`).click();
    cy.get(`[aria-label="${FutureDate.format('MMM D, YYYY')}"]`).click();
    cy.checkDatesFields(`[value="${PrevDay.format('M/DD/YYYY')}"]`,`[value="${FutureDate.format('M/DD/YYYY')}"]`);
  });

  it('should allow users to navigate between the months', () => {
    cy.reload()
    cy.get(MuiTextField)
      .first()
      .click()
   // cy.get('[data-testid="ArrowRightIcon"]').eq(1).click();
    cy.get(MonthLabel)
      .should('contain', now.format('MMMM YYYY'))
      .and('contain', NextMonth.format('MMMM YYYY')); // format('MMM D, YYYY')

    cy.get('[data-testid="ArrowRightIcon"]').eq(1).click();
    cy.get(MonthLabel)
      .should('contain', NextMonth2.format('MMMM YYYY'))
      .and('contain', NextMonth.format('MMMM YYYY')); 
  });

  it('should allow users select date range and verify that date is visible in input fields', () => {
    cy.reload()
    cy.get(MuiTextField).first().type(now.format('MM/DD/YYYY'));
    cy.get(`[aria-label="${now.format('MMM D, YYYY')}"]`).click()
   // cy.get(MuiTextField).last().type(FutureDate.format('MM/DD/YYYY'));
    cy.get(`[aria-label="${FutureDate.format('MMM D, YYYY')}"]`).click()

    // cy.get('[aria-label="Jan 7, 2023"]').eq(0).click();
    // cy.get('[aria-label="Jan 14, 2023"]').click();
    // cy.checkDatesFields('[value="01/07/2023"]', '[value="01/14/2023"]');
    cy.checkDatesFields(`[value="${now.format('M/DD/YYYY')}"]`,`[value="${FutureDate.format('M/DD/YYYY')}"]`);
  });

});
