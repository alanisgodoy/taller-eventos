document.getElementById('contenedor').addEventListener('click', function() {
    alert('Hola! Soy el div');
});

document.querySelector('button').addEventListener('click', function(event) {
    event.stopPropagation(); // Evita que el evento se propague al div
    alert('Hola!');
});
