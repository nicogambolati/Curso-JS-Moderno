const producto = 'Monitor de 20 pulgadas';
console.log(producto);

// remplaza parte de una cadena de texto
console.log(producto.replace('pulgadas', '"'));
console.log(producto.replace('Monitor', 'Monitor Curvo'));


//Cortar una cadena de texto .slice
console.log(producto.slice(0, 10));
console.log(producto.slice(8));


// alternativa a .slice
console.log(producto.substring(0,10));


// No hace nada
console.log(producto.slice(2,1));
//Lo modifica, esa es la diferencia entre .slice y .subString
console.log(producto.substring(2,1));


const usuario = 'Nicolas';
//te muestra la primera letra
console.log(usuario.substring(0,1));
console.log(usuario.charAt(0));