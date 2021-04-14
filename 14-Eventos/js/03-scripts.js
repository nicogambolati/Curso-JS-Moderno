const busqueda = document.querySelector('.busqueda');

busqueda.addEventListener('input', (e)=> {
    console.log(e.target.value);  //TRAER LO QUE ESTA ESCRIBIENDO EL USUARIO
})