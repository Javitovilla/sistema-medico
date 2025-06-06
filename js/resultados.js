function verPDF(nombreArchivo) {
    window.open(`assets/${nombreArchivo}`, '_blank');
}

document.getElementById('logoutBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});