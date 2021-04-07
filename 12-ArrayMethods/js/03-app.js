const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//CON UN FOREACH 
let total = 0;
carrito.forEach( producto => total += producto.precio);
console.log(total);


// .reduce() =>fFUNCION REDUCTORA, ES DECIR TOMAR UNA GRAN CANTIDAD DE DATOS Y ENTREGAR UN RESULTADO 
// SE LE PASAN 2 VALORES, PRIMERO EL VALOR ANTERIOR Y DESPUES EL VALOR ACTUAL
// despues de la ',' es apartir de donde inicia (ejemplo iniciar desde 0)
let resultado = carrito.reduce( (total, producto) => total + producto.precio, 0 );
console.log(resultado);