//CONSTRUCTORES
function Seguro (marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

//REALIZA LA COTIZACION CON LOS DATOS
Seguro.prototype.cotizarSeguro = function() {
    /*
    1 = Americano 1.15
    2 = Asiatico 1.05
    3 = Europeo 1.35
    */
   let cantidad;
   const base = 2000;

   switch(this.marca){
    case '1':
        cantidad = base * 1.15
        break;
    case '2':
        cantidad = base * 1.05
        break;
    case '3':
        cantidad = base * 1.35
        break;
    default:
        break;
   }

   //Leer el año
   const diferencia = new Date().getFullYear() - this.year;

   //Cada año que la diferencia es mayor, el costo se reduce un 3%
   cantidad -= ( (diferencia * 3) * cantidad ) / 100;

   /*   
    seguro basico 30%
    seguro completo 50%
   */
  if(this.tipo === 'basico'){
      cantidad *= 1.30;
  } else {
      cantidad *= 1.50;
  }
  return cantidad;
}

function UI (){

}

//Llena las opciones de los años
UI.prototype.llenarOpciones = () => {
    const max = new Date().getFullYear();
    const min = max - 20;
    
    const selecYear = document.querySelector('#year');

    for(let i = max; i > min; i--){
        let option = document.createElement('option');
        option.value = i;
        option.textContent = i;
        selecYear.appendChild(option);
    }
}

//LLena alertas en pantalla 
UI.prototype.mostrarMensajes = (mensaje, tipo) => {
    const div = document.createElement('div');

    if(tipo === 'error'){
        div.classList.add('error');
    } else {
        div.classList.add('correcto');
    }

    div.classList.add('mensaje','mt-10');
    div.textContent = mensaje;

    //Insertar en el HTML
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.insertBefore(div, document.querySelector('#resultado'));

    setTimeout( ()=> {
        div.remove();
    },3000) 
}

UI.prototype.mostrarResultado = (total, seguro) => {
    
    const {marca, year, tipo} = seguro;
    let textoMarca;
    switch(marca){
        case '1':
            textoMarca = 'Americano';
            break;
        case '2':
            textoMarca = 'Asiatico';
            break;    
        case '3':
            textoMarca = 'Europeo';
            break;
        default:
            break;
    }

    //Crear el resultado 
    const div = document.createElement('div');
    div.classList.add('mt-10');

    div.innerHTML = `
        <p class="header">Tu Resumen</p>
        <p class="font-bold">Marca: <span class="font-normal"> ${textoMarca} </span></p>
        <p class="font-bold">Año: <span class="font-normal"> ${year} </span></p>
        <p class="font-bold">Tipo: <span class="font-normal capitalize"> ${tipo} </span></p>
        <p class="font-bold">Total: <span class="font-normal"> $ ${total} </span></p>
    `;

    const resultadoDiv = document.querySelector('#resultado');
    

    //Mostrar Spinner
    const spinner = document.querySelector('#cargando');
    spinner.style.display = 'block';

    setTimeout(() => {
        spinner.style.display = 'none';
        resultadoDiv.appendChild(div); // Se muestra el resultado
    }, 3000);
} 

//Instaciar UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
})

eventListeners();
function eventListeners(){
    const formulario = document.querySelector('#cotizar-seguro');
    formulario.addEventListener('submit', cotizarSeguro);
}

function cotizarSeguro(e){
    e.preventDefault();

    //Leer la marca seleccionada
    const marca = document.querySelector('#marca').value;

    //leer el año seleccionado
    const year = document.querySelector('#year').value;   

    //leer el tipo de cobertura
    // Lo hago asi porque comparten los radion Button comparten el nombre, pero el valor es diferentes. 
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    
    if(marca === '' || year === '' || tipo === ''){
        ui.mostrarMensajes('Todos los campos son obligatorios.', 'error');
        return;
    } 
    
    ui.mostrarMensajes('Cotizando...', 'exito');

    //Ocultar las cotizaciones previas
    const resultado = document.querySelector('#resultado div');
    if(resultado != null){
        resultado.remove();
    }

    //Instaciar el Seguro
    const seguro = new Seguro(marca, year, tipo);
    const total = seguro.cotizarSeguro();

    //Utilizar el prototype que va a cotizar
    ui.mostrarResultado(total,seguro);
}