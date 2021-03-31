const carrito = [];

const producto = {
    nombre : 'Monitos 24  "',
    precio : 400
}

const producto2 = {
    nombre : 'Celular',
    precio : 650
}

const producto3 = {
    nombre : 'Tablet',
    precio : 150
}

//agrega al final
carrito.push(producto);
carrito.push(producto2);
//agrega al inicio
carrito.unshift(producto3);

console.log(carrito);
console.table(carrito);


/* //Eliminar ultimo elemento del arreglo
carrito.pop();
console.table(carrito); */

/* //Eliminar el primer elemento del arrelgo
carrito.shift(); */


//Eliminar un elemento 
carrito.splice(1,1);
console.table(carrito);
