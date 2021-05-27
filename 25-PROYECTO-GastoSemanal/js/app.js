//VARIABLES Y SELECTORES
const formulario = document.querySelector('#agregar-gasto');
const gastoListado = document.querySelector('#gastos ul');

//EVENTOS
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', preguntarPresupuesto);
    
    formulario.addEventListener('submit', agregarGasto);
}
//CLASES
class Presupuesto {
    constructor(presupuesto){
        this.presupuesto = Number(presupuesto);
        this.restante = Number(presupuesto);
        this.gastos = [];
    }

    nuevoGasto(gasto){
        this.gastos = [...this.gastos,gasto];
        this.calcularRestante();
    }

    calcularRestante(){
        const gastado = this.gastos.reduce( (total, gasto) => total + gasto.cantidad, 0);
        this.restante = this.presupuesto - gastado;
    }

    eliminarGasto(id){
        this.gastos = this.gastos.filter( gasto => gasto.id !== id);
        this.calcularRestante();
    }
}

class UI {
    insertarPresupuesto (cantidad){
        //Extrayendo valores
        const {presupuesto, restante} = cantidad;

        //Agregar al HTML
        document.querySelector('#total').textContent = presupuesto;
        document.querySelector('#restante').textContent = restante;
    }

    imprimirAlerta(mensaje, tipo){
        const divMensaje = document.createElement('div');
        divMensaje.classList.add('text-center', 'alert');

        if(tipo === 'error'){
            divMensaje.classList.add('text-center', 'alert-danger');
        } else {
            divMensaje.classList.add('alert-success');
        }

        divMensaje.textContent = mensaje;
        document.querySelector('.primario').insertBefore(divMensaje, formulario);
        
        setTimeout(() => {
            divMensaje.remove();
        }, 3000);
    }

    mostrarGastos(gastos){
        this.limpiarHTML();

        //Iterar sobre los gastos
        gastos.forEach(gasto => {
            const { cantidad, nombre, id} = gasto;

            //crear LI
            const nuevoGasto = document.createElement('li');
            nuevoGasto.className = 'list-group-item d-flex justify-content-between align-items-center';
            nuevoGasto.dataset.id = id; // es lo mismo que nuevogasto.setAttribute('data-id', id);

            //Agregar el HTML del gasto
            nuevoGasto.innerHTML = `${nombre} <span class="badge badge-primary badge-pill"> $ ${cantidad} </span>`;

            //Boton para borrar el gasto
            const btnBorrar = document.createElement('button');
            btnBorrar.classList.add('btn', 'btn-danger','borrar-gasto'); 
            btnBorrar.innerHTML ='Borrar &times'; //&times es una entidad de HTML => le agrega la x al boton
            btnBorrar.onclick = () => {
                eliminarGasto(id);
            }
            nuevoGasto.appendChild(btnBorrar);

            //Agregar al HTML
            gastoListado.appendChild(nuevoGasto);
        });
    }

    limpiarHTML() {
        while(gastoListado.firstChild){
            gastoListado.removeChild(gastoListado.firstChild);
        }
    }

    actualizarRestante(restante){
        document.querySelector('#restante').textContent = restante;
    }

    comprobarPresupuesto(presupuestoObj){
        const {presupuesto, restante} = presupuestoObj; 
        const restanteDiv = document.querySelector('.restante');

        //Comprobar 25 %
        if ( (presupuesto / 4) > restante){
           restanteDiv.classList.remove('alert-success', 'alert-warning');
           restanteDiv.classList.add('alert-danger');

        } else if ( (presupuesto / 2) > restante){
            restanteDiv.classList.remove('alert-success');
            restanteDiv.classList.add('alert-warning');
        } else {
            restanteDiv.classList.remove('alert-danger', 'alert-warning');
           restanteDiv.classList.add('alert-success');
        }

        if(restante <= 0){
            ui.imprimirAlerta('El presupuesto se ha agotado','error');
            formulario.querySelector('button[type="submit"]').disabled = true;
        }
    }
}

//INSTANCIAS
const ui = new UI();
let presupuesto;

//FUNCIONES
function preguntarPresupuesto(){
    const presupuestoUsuario = prompt('¿Cual es tu presupuesto?'); //Crea La ventana
   
    if(presupuestoUsuario === '' || presupuestoUsuario === null || isNaN(presupuestoUsuario) || presupuestoUsuario <= 0){ 
        //isNaN() => Devuelve un boolean si el string se puede convertir en un numero
        window.location.reload();//recarga la pagina actual
    }

    //Presupuesto Valido
    presupuesto = new Presupuesto(presupuestoUsuario);
    console.log(presupuesto);

    ui.insertarPresupuesto(presupuesto);
}

function agregarGasto(e){
    e.preventDefault();

    //Leer los datos del formulario 
    const nombre = document.querySelector('#gasto').value;
    const cantidad =Number( document.querySelector('#cantidad').value);

    //Validacion
    if(nombre === '' || cantidad ===''){
        ui.imprimirAlerta('Todos los datos son obligatorios', 'error');
        return;
    } else if (cantidad <= 0 || isNaN(cantidad)){
        ui.imprimirAlerta('Cantidad no valida', 'error');
        return;
    } 

    //General un Objeto con el Gasto
    const gasto = {  // Object Literal Mejorado => Une el nombre y cantidad a gasto, es lo contrario a destructuring
        nombre, 
        cantidad, 
        id: Date.now()
    }; 
    
    presupuesto.nuevoGasto(gasto);  
    ui.imprimirAlerta('Gasto agregado correctamente');

    //Imprimir Gastos
    const  { gastos, restante } = presupuesto; //destructuring => extraigo gasto de presupuesto
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);

    formulario.reset();
}

function eliminarGasto(id){
   //Elimina los gastos del objeto
    presupuesto.eliminarGasto(id);

    //Elimina los gastos del HTML
    const { gastos, restante } = presupuesto;
    ui.mostrarGastos(gastos);

    ui.actualizarRestante(restante);

    ui.comprobarPresupuesto(presupuesto);
}