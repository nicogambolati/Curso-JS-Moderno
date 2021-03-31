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
//forma declarativa -> no modifica el arreglo
let resultado ;
resultado = [...carrito,producto];
resultado = [...resultado,producto2];
resultado = [producto3,...resultado];

console.table(resultado);