import './commands';
/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      checkDatesFields(BeginDate: string, EndDate: string): Chainable<Element>;
    }
  }
}
