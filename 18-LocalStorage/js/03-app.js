localStorage.removeItem ('nombre');


//Actualizar un registro
const mesesArray = JSON.parse( localStorage.getItem('meses') ); //primero traigo el elemento y si quiero ya lo parseo
console.log (mesesArray);

mesesArray.push('Nuevo Mes'); // Agrego o Modifico
console.log (mesesArray);

localStorage.setItem('meses', JSON.stringify(mesesArray));  // y lo vuelvo a guarda

//LImpia Local Storage
localStorage.clear();