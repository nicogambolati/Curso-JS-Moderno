const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// EN UN .every() TODOS LOS ELEMENTOS DEBEN CUMPLIR ESA CONDICION
const resultado = carrito.every( producto => producto.precio < 500);
console.log(resultado); 

// PARA REVISAR SI AL MENOS UNO CUMPLE CON LA CONDICION USAR .some()
const resultado2 = carrito.some( producto => producto.precio < 500);
console.log(resultado2);