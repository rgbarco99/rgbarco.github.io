document.getElementById('linkMensaje').addEventListener('click', function(event) {
    event.preventDefault();
    Swal.fire({
        title: 'Que curiosa eres no?',
        text: 'Deja de tocar cosas y hazme una tarta de queso',
        icon: 'error',
        confirmButtonText: 'Cerrar'
    });
});
