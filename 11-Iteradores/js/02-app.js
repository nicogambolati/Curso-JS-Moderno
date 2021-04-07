// crear un for loot que al detectar el elemento 5 detenga su ejecucion

//break rompe el for, no se va a ejecutar mas el for
for ( let i=1 ; i <= 10; i++){
    if( i === 5 ){
        console.log('CINCO');
        break;
    }

    console.log(`Numero: ${i}`);
}

//continue, ejecuta la linea y vuelve a continuar el for
for ( let i=1 ; i <= 10; i++){
    if( i === 5 ){
        console.log('CINCO');
        continue;
    }

    console.log(`Numero: ${i}`);
}


const carrito = [
    { nombre : 'Tablet' , precio : 150 },
    { nombre : 'Celular' , precio : 700 },
    { nombre : 'Auriculares' , precio : 200, descuento: true},
    { nombre : 'Monitor 27 "' , precio : 450 },
    { nombre : 'Teclado' , precio : 100 },
    
];

for ( let i=0 ; i < carrito.length; i++){
    if(carrito[i].descuento){
        console.log(`El articulo ${carrito[i].nombre} tiene descueto !!!`);
        continue;
    }
    console.log(carrito[i].nombre);
}
