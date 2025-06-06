// FIX-REDIRECT.JS
document.addEventListener('DOMContentLoaded', function() {
    // Fix para login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            window.location.pathname = window.location.pathname.replace(
                'index.html', 
                'resultados.html'
            );
        });
    }
    
    // Fix para botón volver
    const backBtn = document.getElementById('backBtn');
    if (backBtn) {
        backBtn.addEventListener('click', function() {
            window.location.pathname = window.location.pathname.replace(
                'resultados.html', 
                'index.html'
            );
        });
    }
});