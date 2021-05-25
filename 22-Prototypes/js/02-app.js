function Cliente (nombre, saldo){
    this.nombre = nombre;
    this.saldo = saldo;
}

const nicolas  = new Cliente ('Nicolas', 500);

function formatearCliente(cliente){
    const {nombre, saldo} = cliente;
    return `El cliente ${nombre} tiene un saldo de ${saldo}.`;
}

console.log( formatearCliente(nicolas) );

//--------------------------------------------------------------------
function Empresa (nombre, saldo, categoria){
    this.nombre = nombre;
    this.saldo = saldo;
    this.categoria = categoria;
}

const CCJ = new Empresa('Codigo con Juan', 4000, 'Cursos en linea');

function formatearEmpresa(empresa){
    const {nombre, saldo, categoria} = empresa;
    return `El cliente ${nombre} tiene un saldo de ${saldo} y pertenece a la categoria ${categoria}.`;
}

console.log( formatearEmpresa(CCJ) );