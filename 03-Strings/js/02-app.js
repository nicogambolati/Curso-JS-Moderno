const producto = 'Monitor de 20 pulgadas';



console.log(producto);
console.log(producto.length);

//lo encontro en la posicion 0
console.log(producto.indexOf('Monitor'));

//lo encontro en la letra posicion 11
console.log(producto.indexOf('pulgadas'));

//-1 significa que no lo encontro
console.log(producto.indexOf('tablet'));

//False porque no lo encontro
console.log(producto.includes('Tablet'));

//True porque lo encontro
console.log(producto.includes('Monitor'));