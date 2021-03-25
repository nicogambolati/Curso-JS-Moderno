const producto = '                       Monitor de 20 pulgadas           ';

console.log(producto);
console.log(producto.length);

//Elimina los espacios del inicio
console.log(producto.trimStart());

//Elimina los espacios del final
console.log(producto.trimEnd());

//concatenar metodos
console.log(producto.trimStart().trimEnd());

//Elimina directamente los espacios del inicio y final
console.log(producto.trim());