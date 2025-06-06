document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // 1. Obtener valores
    const documento = document.getElementById('documento').value;
    const password = document.getElementById('password').value;
    
    // 2. Validación (usando tus credenciales de prototipo)
    if (documento === '123456' && password === '123456') {
        
        // 3. Redirección INFALIBLE
        const baseUrl = window.location.origin; // Ej: http://127.0.0.1:8080
        window.location.href = `${baseUrl}/resultados.html`;
        
    } else {
        document.getElementById('errorMsg').textContent = 'Error: Credenciales incorrectas';
    }
});