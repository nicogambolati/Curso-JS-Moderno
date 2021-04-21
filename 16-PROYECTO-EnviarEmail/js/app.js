const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formulario = document.querySelector('#enviar-mail');

const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');

const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/  

eventListeners();

function eventListeners (){
    //Cuando la app Inicia
    document.addEventListener('DOMContentLoaded', iniciarApp );

    //Campos del formulario
    email.addEventListener('blur', validarFormulario); // blur se ejecuta cuando este en el input y me salgo 
    asunto.addEventListener('blur', validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

    formulario.addEventListener('submit', enviarEmail);

    //btnReset.addEventListener('click', resetFormulario);
}

function iniciarApp(){
    console.log('Iniciando...');
    btnEnviar.disabled = true;
    btnEnviar.classList.add('cursor-not-allowed', 'opacity-50'); //clases de estilos de "tailwind"    
}

function validarFormulario(e){
    if(e.target.value.length > 0){
        //Elimina los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove(); 
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if(e.target.type === 'email'){
       if(regexEmail.test(e.target.value)){
        //Elimina los errores
        const error = document.querySelector('p.error');
        if(error){
            error.remove(); 
        }

        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
       } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Email no valido');
       }
    } 

    if(regexEmail.test(email.value) && asunto.value !=='' && mensaje.value !==''){
        btnEnviar.disabled = false;
        btnEnviar.classList.remove('cursor-not-allowed', 'opacity-50'); //clases de estilos de "tailwind"  
    } 
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores =  document.querySelectorAll('.error'); // Uso .querySelectorAll() porque .length no existe en querySelector()
    if(errores.length === 0){
        formulario.appendChild(mensajeError);// Agrega mensaje de error
    }
}

function enviarEmail(e){
   e.preventDefault();
   
   //mostrar el spinner
   const spinner = document.querySelector('#spinner');
   spinner.style.display = 'flex';

   // despues de 3 seg oculta el spinner y muestra el mensaje
   setTimeout( () => {
       spinner.style.display = 'none';

       const parrafo = document.createElement('p');
       parrafo.textContent = 'El mensaje se envió correctamente';
       parrafo.classList.add('text-center', 'my-10', 'p-2', 'bg-green-500', 'text-white', 'font-bold', 'uppercase');

       formulario.insertBefore(parrafo, spinner);
       
        setTimeout( () => {
            parrafo.remove();
            resetFormulario();
        },5000 );
   }, 3000);  // el tiempo se coloca entre la llave de cierre y el parentesis de cierre
}

function resetFormulario (){
    formulario.reset();
    iniciarApp();
}