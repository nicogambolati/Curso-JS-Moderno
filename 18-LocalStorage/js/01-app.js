localStorage.setItem('nombre', 'nicolas');
//setItem guarda los datos como un String 

/*-------------------------------------------*/
const producto = {
    nombre : 'Monitor 24 "',
    precio : 300
}

//Si quiero guardar un objeto tengo que pasarlo a un String con el metodo " JSON.stringify "
const productoString = JSON.stringify ( producto );
localStorage.setItem ('producto', productoString);

/*-----------------------------------------------------------*/


//Lo mismo si quiero guardar un arreglo
const meses = ['Enero', 'Febrero', 'Marzo'];
localStorage.setItem ('meses', JSON.stringify (meses));