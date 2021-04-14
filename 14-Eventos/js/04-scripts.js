const form = document.querySelector('#formulario');

form.addEventListener('submit', validarFormulario);

function validarFormulario(e){
    e.preventDefault(); // DETIENE LA ACCION POR DEFAULT
    console.log('Consultar una api');
    console.log(e.target.action);
}