describe('Pruebas de Rendimiento (RQNF-01)', () => {
  it('Tiempo de carga de index.html < 2.5 segundos', () => {
    // Opción 1: Usando el custom command (recomendado)
    cy.measureLoadTime('http://localhost:8080/index.html').then(() => {
      cy.window().then((win) => {
        const measures = win.performance.getEntriesByName('pageLoad');
        const loadTime = measures[0].duration / 1000; // Convertir a segundos
        expect(loadTime).to.be.lessThan(2.5);
      });
    });

    // Opción 2: Sin custom command (alternativa)
    /*
    const startTime = Date.now();
    cy.visit('http://localhost:8080/index.html', {
      onLoad: () => {
        const loadTime = (Date.now() - startTime) / 1000;
        expect(loadTime).to.be.lessThan(2.5);
      }
    });
    */
  });
});