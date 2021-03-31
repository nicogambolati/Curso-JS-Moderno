const producto = {
    nombre : "Monitor 20 pulgadas",
    precio : 300,
    disponible : true
}

//Destructuring - > crea la variable y obtener el valor 
const {nombre, precio, disponible} = producto;

//Destructuring  con arrelgos
const numeros = [10,20,30,40,50];

const [primero, ...tercero] = numeros;

console.log(tercero);