const carrito = [
    { nombre : 'Tablet' , precio : 150 },
    { nombre : 'Celular' , precio : 700 },
    { nombre : 'Auriculares' , precio : 200},
    { nombre : 'Monitor 27 "' , precio : 450 },
    { nombre : 'Teclado' , precio : 100 },
    
];


/* const nuevoArreglo2 = carrito.map( function(producto){
   return `${producto.nombre} - Precio: ${producto.precio}`;
}) */


/* const nuevoArreglo = carrito.forEach( function(producto) {
   return `${producto.nombre} - Precio: ${producto.precio}`;
}) */

//******ARROW FUNCTIONS******
const nuevoArreglo = carrito.map( producto => `${producto.nombre} - Precio: ${producto.precio}` );
carrito.forEach( producto => console.log( `${producto.nombre} - Precio: ${producto.precio}` ) );
 

console.log(nuevoArreglo);
//console.log(nuevoArreglo2);