const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

// para saber si un objeto esta vacio. Para saber si la consulta en la BD de los datos de un cliente fue exitosa o no.
console.log(Object.keys (producto) );

//retorna los valores
console.log(Object.values (producto) );

// retorna todo en pares
console.log(Object.entries (producto) );