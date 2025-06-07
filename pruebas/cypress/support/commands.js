// Custom command para medir tiempo de carga
Cypress.Commands.add('measureLoadTime', (url) => {
  cy.visit(url, {
    onBeforeLoad: (win) => {
      win.performance.mark('start');
    },
    onLoad: (win) => {
      win.performance.mark('end');
      win.performance.measure('pageLoad', 'start', 'end');
    }
  });
});