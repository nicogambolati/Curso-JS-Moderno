//Pregunta al usuario su nombre
const nombre = prompt('cual es tu nombre?');

// Toma el nombre y lo muestra en pantalla
document.querySelector('.contenido').innerHTML = `${nombre} esta aprendiendo JavaScript`;