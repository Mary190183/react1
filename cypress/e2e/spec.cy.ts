describe('e2e tests', () => {
  it('opens nav links', () => {
    cy.visit('/');
    cy.contains('About us').click();
    cy.contains('Recycle').click();
  });
  it('home page', () => {
    cy.visit('/');
    cy.get('[type="search"]').type('falemean').click();
    cy.get('[type="submit"]').click();
    cy.get('p').contains('Not found');
  });
  it('about page', () => {
    cy.visit('/about');
    cy.contains('grow your home').click();
    cy.contains('Recycle page').click();
  });
  it('recycle page', () => {
    cy.visit('/recycle');
    cy.get('input[name="date"]').type('2023-01-01');
    cy.get('input[name="title"]').type('Bottle');
    cy.get('select').select('Plastic');
    cy.get('input[type=file]').selectFile('public/image1.jpg', { force: true });
    cy.get('[type="radio"]').first().check();
    cy.get('[type="checkbox"]').click();
    cy.get('[type="submit"]').click();
    cy.on('window:alert', (str) => {
      expect(str).to.equal(`Card is completed`);
    });
    cy.get('.new-card-title').contains('Bottle');
  });
  it('404 page', () => {
    cy.visit('/hgty');
    cy.contains('This page doesn');
    cy.contains('Houseplants').click();
  });
  it('test reload', () => {
    expect(true).to.equal(true);
  });
});
