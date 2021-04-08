const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

//OTRAS FORMAS DE TRAER EL HTML
//console.log (encabezado.innerText); // si en el CSS - visibility: hidden; no lo va a encontrar
//console.log(encabezado.textContent); // si lo va a encontrar
//console.log(encabezado.innerHTML);// se trae el HTML 



//MODIFICAR EL HTML
//const nuevoHeading = 'Nuevo Heading';
//document.querySelector('.contenido-hero h1').textContent = nuevoHeading;

//MODIFICAR UNA IMAGEN 
const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg';