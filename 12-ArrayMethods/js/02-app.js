const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];

const carrito = [
    { nombre: 'Monitor 27 Pulgadas', precio: 500 },
    { nombre: 'Televisión', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

meses.forEach(  (mes, i) => {
    if (mes === 'Abril'){
        console.log(`Se encuentra en la posicion ${i}`);
    }
})

// ENCONTRA EL INDICE DE ABRIL CON .findIndex() 
// SI NO LO ENCUENTRA DEVUELVE -1
const indice = meses.findIndex( mes => mes ==='Abril');
console.log(indice);


//ENCONTRAR EL INDICE EN UN ARREGLO DE OBJETO CON .findIndex()
const indice2 = carrito.findIndex( producto => producto.nombre === 'Celular');
console.log(indice2);




