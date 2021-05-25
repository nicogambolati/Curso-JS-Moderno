const nombre = localStorage.getItem('nombre');
console.log(nombre);

//--------------------------------------------------------//

//Para convertir un String a Objeto o Arreglo ( cuando tenga esa forma) uso el metodo JSON.parse ()
const productoJSON = localStorage.getItem('producto');
console.log(JSON.parse (productoJSON) );


//--------------------------------------------------------//
const meses = localStorage.getItem('meses');
const mesesArray = JSON.parse (meses)
console.log (mesesArray);