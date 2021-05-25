function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

//Este Metodo es Exclusivo de Cliente
Cliente.prototype.tipoCliente = function() {
    let tipo;

    if(this.saldo > 10000){
        tipo = 'Gold';
    } else if (this.saldo > 5000){
        tipo = 'Platinum';
    } else {
        tipo = 'Normal';
    }

    return tipo;
}

Cliente.prototype.nombreClienteSaldo = function() {
    return `Nombre: ${this.nombre}, Saldo: ${this.saldo}, Tipo: ${this.tipoCliente()}`;
}

Cliente.prototype.retiraSaldo = function(retira) {
    this.saldo -= retira;
}

//-----------------------------------------------------------------------------------------------
function Persona (nombre, saldo, telefono) {
    //.call() manda a llamar a un metodo, de esta forma HEREDA el constructor de CLiente
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}

//Antes de crear una Instancia, para heredar los metodos en el PROTOTYPE
Persona.prototype = Object.create(Cliente.prototype);
Persona.prototype.constructor = Cliente;

//Instaciarlo
const juan = new Persona('Juan', 5000, 46076904);

console.log(juan);
console.log(juan.nombreClienteSaldo());


Persona.prototype.mostrarTelefono = function (){
    return `El telefona de esta persona es ${this.telefono}. `;
}

console.log(juan.mostrarTelefono());