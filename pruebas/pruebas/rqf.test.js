const { 
  simularLogin, 
  generarEnlacePDF, 
  filtrarPorFecha,
  mostrarEnConsola
} = require('./mocks.js');

describe('Pruebas para RQF-01 (Login)', () => {
  test('Cédula "123456" y contraseña "123456" son válidas', () => {
    expect(simularLogin("123456", "123456")).toBe(true);
  });

  test('Cédula "000000" es inválida', () => {
    expect(simularLogin("000000", "123456")).toBe(false);
  });
});

describe('Pruebas para RQF-02 (PDFs)', () => {
  test('Genera enlace correcto para PDF de hematología', () => {
    expect(generarEnlacePDF('hematologia'))
      .toBe('/assets/hematologia.pdf');
  });
});

describe('Pruebas para RQF-04 (Filtros)', () => {
  test('Filtrar por fecha "15/05/2024" retorna 1 resultado', () => {
    const resultados = [
      { fecha: '10/05/2024', examen: 'Radiografía' },
      { fecha: '15/05/2024', examen: 'Hematología' }
    ];
    expect(filtrarPorFecha(resultados, '15/05/2024').length).toBe(1);
  });
});

describe('Pruebas para RQNF-02 (Seguridad)', () => {
  test('La contraseña se muestra encriptada en consola', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    mostrarEnConsola("123456");
    expect(consoleSpy).toHaveBeenCalledWith(expect.stringMatching(/\*\*\*\*\*\*/));
  });
});