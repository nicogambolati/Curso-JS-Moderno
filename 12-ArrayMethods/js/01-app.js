const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// COMPROBAR SI UN VALOR EXISTE EN UN ARREGLO 

meses.forEach ( mes => {
    if(mes === 'Enero'){
        console.log('Enero si existe.');
    }
})
// .include SOLO FUNCIONA EN UN ARREGLO DE INDICES
const resultado = meses.includes('Febrero');
console.log(resultado);

// EN UN ARREGLO DE OBJETOS SE UTILIZA .some()
const existe = carrito.some( producto => producto.nombre === 'Celular');
console.log(existe);

// EN UN ARRGLO TRADICIONAL CON .some()
const existe2 = meses.some(mes => mes === 'Febrero');
console.log(existe2);