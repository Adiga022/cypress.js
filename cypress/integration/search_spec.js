describe('Search Tab', function() {
  beforeEach(function() {
    cy.visit('localhost:8000');
  });

  it('should have search elements displayed', function() {
    var header = cy.get('#top-header');
    header.find('input').should('have.attr', 'placeholder', 'Artist or City');
  });
});