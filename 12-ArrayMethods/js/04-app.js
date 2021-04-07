const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

let resultado;
let resultado2;
let resultado3;

//TRAER LOS PRODUCTOS CON PRECIO MAYOR A 400
resultado = carrito.filter( producto => producto.precio > 400);
console.log(resultado);

//SACAR UN PRODUCTO DEL CARRITO
resultado2 = carrito.filter( producto => producto.nombre !== 'Teclado');
console.log(resultado2);

//TRAER SOLO UN PRODUCTO DEL CARRITO
resultado3 = carrito.filter( producto => producto.nombre === 'Celular');
console.log(resultado3);



