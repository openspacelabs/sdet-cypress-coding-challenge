describe('DateRangePicker', () => {
  it('should render', () => {
    cy.visit('/');
    cy.get('.DateRangeSelect').should('be.visible');
  });
});
