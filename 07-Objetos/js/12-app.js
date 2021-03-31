//Object Literal
const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//Object Constructor
function Producto (nombre, precio){
    this.nombre = nombre,
    this.precio = precio,
    this.disponible = true
}


const producto2 = new Producto ('Televisor 49 pulgadas', 800);
console.log(producto2);

const producto3 = new Producto ('Tablet', 150);
console.log(producto3);