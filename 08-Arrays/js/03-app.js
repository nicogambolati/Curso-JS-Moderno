const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

console.log(meses);
console.table(meses);

// cuanto mide el arreglo
console.log(meses.length);

//Recorro el arreglo
// es let porque no podes modificar un cost una vez declarado
for(let i = 0; i < meses.length; i++){
    console.log( meses[i] );
}