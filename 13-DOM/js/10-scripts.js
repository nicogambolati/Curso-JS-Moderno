const enlace = document.createElement('a');
 
//AGREGANDOLE EL TEXTO
enlace.textContent = 'Nuevo Enlace';

//AÑADIENDO href
enlace.href = '/nuevo-enlace';

console.log(enlace);


//PUEDO AGREAGANDO NUEVOS ATRIBUTOS, CLASES O FUNCIONES
enlace.target = '_blank';
enlace.setAttribute ('data-enlace', 'nuevo-enlace');
enlace.classList.add('alguna-clase');
enlace.onclick = miFuncion;

function miFuncion() {
    alert('Diste click.');
}

const navegacion = document.querySelector('.navegacion'); // SELECCIONAR DONDE LO QUIERO PONER
console.log(navegacion.children); // SABER LOS DIFERENTES LUGARES Y LAS POSICIONES DISPONIBLES
navegacion.insertBefore(enlace, navegacion.children[1]); //INSERTARLO ANTES DE....



// > > > CREAR UN CARD DE FORMA DINAMICA < < <
const parrafo1 = document.createElement('p');
parrafo1.textContent = 'Concierto';
parrafo1.classList.add('categoria', 'concierto');

const parrafo2 = document.createElement('p');
parrafo2.textContent = 'Concierto de Rock';
parrafo2.classList.add('titulo');

const parrafo3 = document.createElement('p');
parrafo3.textContent = '$800 por persona.';
parrafo3.classList.add('precio');


//CREAR div CON LA CLASE DE info
const info = document.createElement('div');
info.classList.add('info');
info.appendChild(parrafo1);
info.appendChild(parrafo2);
info.appendChild(parrafo3);


//CREAR LA IMAGEN
const imagen = document.createElement('img');
imagen.src = 'img/hacer2.jpg';

//CREAR CARD
const card = document.createElement('card');
card.classList.add('card');

//ASIGNAR LA IMAGEN
card.appendChild(imagen);

//ASIGNAR INFO
card.appendChild(info);

//ASIGNAR EN QUE PARTE DEL HTML INSERTARLO
const contenedor = document.querySelector('.hacer .contenedor-cards');
contenedor.appendChild(card);
//contenedor.insertBefore(card, contenedor.children[0]); // SI LO QUIERO INSERTAR ADELANTE 


console.log(parrafo3);