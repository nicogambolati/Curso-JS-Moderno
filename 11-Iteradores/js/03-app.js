//RETO DEL FIZZ BUT !!!

//TENGO UNA SERIE DE ELEMENTO DEL 0 AL 100 
//TODOS LOS QUE SON MULTIPLOS DE 3 DEBEN IMPRIMIR FIZZ 3, 6, 9,12
//TODOS LOS QUE SON MULTIPLS DE 5   DEBEN IMPRIMIRBUZZ  5,10,15,20
//TODOS LOS QUIE SON MULTIPLOS DE 3 Y 5 DEBEN IMPRIMIR FIZZ BUT 15,30,45

for (let i=0; i < 100; i++){
    if(i !== 0){
        validar(i);   
    }
}

function validar (i){
    if(i % 3 === 0 && i % 5 === 0){
        return console.log(`${i} FIZZ BUZZ`);
       }
       
       else if(i % 3 === 0){
        return console.log(`${i} FIZZ`);
       }
    
       else if (i % 5 === 0){
        return console.log(`${i} BUZZ`);
       }
       else {
        console.log(i);
       }
}