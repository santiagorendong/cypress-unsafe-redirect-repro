describe('when clicking on http link', () => {
  it('should follow redirects', () => {
    cy.visit('/');
    cy.document().then((doc) => {
      doc.documentElement.innerHTML = `
        <!DOCTYPE html>
        <html lang="es">
          <body>
            <a href="http://httpstat.us/301">
              My link
            </a>
          </body>
        </html>
      `;
    });

    cy.contains('a', 'My link').click();
    cy.get('#title').should('contain.text', 'httpstat.us');
  });
});
