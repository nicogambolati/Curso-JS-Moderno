const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
const meses2 = ['Agosto', 'Septiembre'];
const meses3 = ['Octubre', 'Noviembre', 'Diciembre'];


// CON .concat()
const resultado = meses.concat(meses2, meses3);
console.log(resultado);


//SPREAD OPERATOR
// ... => COPIA EL ARREGLO
const resultado2 = [...meses, ...meses2, ...meses3];
console.log(resultado2);