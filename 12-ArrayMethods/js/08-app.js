const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

//NO MODIFICA EL ARREGLO ORIGINAL => PROGRAMACION FUNCIONAL

//SPREAD OPERATOR CON ARREGLO DE INDICES
const meses2 = [...meses,'Agosto'];

console.log(meses);
console.log(meses2);



//SPREAD OPERATOR CON ARREGLO DE OBJETOS
const producto = {producto: 'Disco Duro', precio: 300};

const carrito2 = [...carrito, producto];

console.log(carrito);
console.log(carrito2);