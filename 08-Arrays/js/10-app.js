const carrito = [
    { nombre : 'Tablet' , precio : 150 },
    { nombre : 'Celular' , precio : 700 },
    { nombre : 'Auriculares' , precio : 200},
    { nombre : 'Monitor 27 "' , precio : 450 },
    { nombre : 'Teclado' , precio : 100 },
    
];

const nuevoArreglo = carrito.forEach( function(producto) {
   return `${producto.nombre} - Precio: ${producto.precio}`;
})

//.map va a crear un arreglo nuevo
const nuevoArreglo2 = carrito.map( function(producto){
   return `${producto.nombre} - Precio: ${producto.precio}`;
})

console.log(nuevoArreglo);
console.log(nuevoArreglo2);