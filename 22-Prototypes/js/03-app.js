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

const nicolas  = new Cliente ('Nicolas', 6000);

console.log(nicolas.tipoCliente());
console.log(nicolas.nombreClienteSaldo());

nicolas.retiraSaldo(1000);
console.log(nicolas.nombreClienteSaldo());

console.log(nicolas);
