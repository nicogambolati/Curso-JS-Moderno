//Proto son las funciones que le puedo pasar a ese tipo de objecto

//-------------------------------------------------------------------------
//OBJECT LITERAL => Es mas comun, pero no permite crear objetos dinamicos 
const cliente = {
    nombre : 'Nicolas',
    saldo : 500
}

console.log(cliente);

//-------------------------------------------------------------------------------
//OBJECT CONSTRUCTOR  => Es menos comun, pero es dinamico 
function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}
//Instancio una nueva instancia de un objeto
const nicolas  = new Cliente ('Nicolas', 500);
console.log(nicolas);

