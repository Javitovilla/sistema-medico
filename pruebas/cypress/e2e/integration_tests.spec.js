describe('Pruebas de Integración - Sistema Médico', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080/index.html');
  });

  // RQF-01
  it('Login exitoso redirige a resultados.html', () => {
    cy.get('#documento').type('123456');
    cy.get('#password').type('123456');
    cy.get('#loginForm').submit();
    cy.url().should('include', 'resultados.html');
  });

  // RQF-02
  it('Botón "Ver PDF" abre nueva pestaña', () => {
    // Primero hacemos login
    cy.get('#documento').type('123456');
    cy.get('#password').type('123456');
    cy.get('#loginForm').submit();
    
    // Verificar PDF
    cy.get('button:contains("Ver PDF")').first().invoke('removeAttr', 'target').click();
    cy.url().should('include', '.pdf'); // Adapta esto a tu ruta real
  });

  // RQF-04
  it('Búsqueda por "Radiografía" muestra 1 resultado', () => {
    // Login
    cy.get('#documento').type('123456');
    cy.get('#password').type('123456');
    cy.get('#loginForm').submit();
    
    // Búsqueda
    cy.get('#searchInput').type('Radiografía');
    cy.get('.result-item').should('have.length', 1);
  });

  // RQNF-03
  it('Interfaz responsive en iPhone 12', () => {
    cy.viewport('iphone-12');
    cy.get('.login-container').should('be.visible');
    cy.matchImageSnapshot('login-mobile'); // Requiere cypress-image-snapshot
  });

  // RQNF-01
  it('Tiempo de carga de index.html < 2.5 seg', () => {
    cy.window().then((win) => {
      const startTime = win.performance.timing.navigationStart;
      const endTime = win.performance.timing.loadEventEnd;
      const loadTime = (endTime - startTime) / 1000;
      expect(loadTime).to.be.lessThan(2.5);
    });
  });
});