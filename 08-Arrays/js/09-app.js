const carrito = [
    { nombre : 'Tablet' , precio : 150 },
    { nombre : 'Celular' , precio : 700 },
    { nombre : 'Auriculares' , precio : 200},
    { nombre : 'Monitor 27 "' , precio : 450 },
    { nombre : 'Teclado' , precio : 100 },
    
];

for(let i = 0; i < carrito.length; i++){
    console.log( `${carrito[i].nombre} - Precio: ${carrito[i].precio}`);
}


//otra forma de iterar un arreglo 
carrito.forEach( function(producto) {
    console.log(`${producto.nombre} - Precio: ${producto.precio}`);
})