module.exports = {
  simularLogin: (doc, pass) => doc === '123456' && pass === '123456',
  
  generarEnlacePDF: (tipo) => `/assets/${tipo}.pdf`,
  
  filtrarPorFecha: (resultados, fecha) => 
    resultados.filter(r => r.fecha === fecha),
    
  mostrarEnConsola: (pass) => 
    console.log(pass.replace(/./g, '*')) 
};