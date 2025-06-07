describe('Autocompletado de navegador', () => {
  it('RQF-01: Llene automáticamente credenciales', () => {
    cy.visit('http://localhost:8080', {
      onBeforeLoad(win) {
        // Simula autofill del navegador
        win.document.querySelector('#documento').value = '123456';
        win.document.querySelector('#password').value = '123456';
      }
    });
    cy.get('#loginForm').submit();
    cy.url().should('include', 'resultados.html');
  });
});