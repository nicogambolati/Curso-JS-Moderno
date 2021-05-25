const diaHoy = new Date();

//Uso una libreria para manejar las fechas => https://momentjs.com/

//Lo pongo en Español
moment.locale('es');

// console.log( moment().format( 'MMMM') );
// console.log( moment().format( 'MMMM D YYYY') );
console.log( moment().format( 'MMMM D YYYY h:mm:ss a') );


console.log( moment().format('LLLL', diaHoy) );


//Agregar 3 dias
console.log( moment().add(3, 'days').calendar() );