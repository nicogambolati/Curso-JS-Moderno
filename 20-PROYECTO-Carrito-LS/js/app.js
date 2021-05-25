const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
let articulosCarrito = [];

cargarEventListeners(); 

function cargarEventListeners(){
    //Cuando agregas un curso presionando "Agregar al carrito"
    listaCursos.addEventListener('click', agregarCurso);

    //Elimina cursos del carrito
    carrito.addEventListener('click', eliminarCurso);

    //Muestra los cursos de localStorage
    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
        carritoHTML();
    })

    //Vaciar carrito
    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    })
}

function agregarCurso(e){
    e.preventDefault();
    // e.target.classList => para saber a donde estoy dando click y que clases me trae
    if(e.target.classList.contains('agregar-carrito')){     //solo cuando el elemento que estamos presionando contenga la clase "Agregar Carrito"      
        const cursoSeleccionado = e.target.parentElement.parentElement; //ir un elemento arriba para saber e ir agregando el nombre,precio,etc. del elemento
        leerDatosCurso(cursoSeleccionado);
        console.log('Agregando al carrito...');
    }
}

function eliminarCurso (e){
    //console.log(e.target.classList);
    if(e.target.classList.contains('borrar-curso')){
        const cursoId = e.target.getAttribute('data-id'); // Obtener el id del curso que quiero eliminar
        //Elimina del arreglo de articulosCarrito por el data-id
        articulosCarrito = articulosCarrito.filter( curso => curso.id !== cursoId ) // Trae todos los elementos, exepto el que quiero eliminar
        carritoHTML();
        
    }
}
 
 function leerDatosCurso(curso){
    //console.log(curso);

    // creo un objeto con el contenido del curso actual
    const infoCurso = { 
        id: curso.querySelector('a').getAttribute('data-id'),
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        cantidad: 1
        
    }
    //console.log(infoCurso);
    
    //Revisa si un elemento ay existe en el carrito
    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id); //.some() permite iterar sobre un arreglo de objetos y verificar si existe en el
    if(existe){
        const curso =  articulosCarrito.map(curso => { //.map() itera sobre todos los elementos del carrito y crea un nuevo arreglo
            if(curso.id === infoCurso.id){
                curso.cantidad++;
                return curso; // retorna el objeto actualizado

            } else {
                return curso; // retorna los objeto que no son duplicados
            }
            
        }) 
        articulosCarrito = [...curso];
    } else{
        //Agrega elementos al arreglo de carrito
        articulosCarrito = [...articulosCarrito, infoCurso];
    }

    console.log(articulosCarrito);
    carritoHTML();
 }

function carritoHTML(){
    limpiarHTML();

    //recorre el carrito y genera el HTML
    articulosCarrito.forEach( curso => { 
        const row = document.createElement('tr');
        row.innerHTML = `
            <td> <img src="${curso.imagen}" width="100"> </td>
            <td> ${curso.titulo} </td>
            <td> ${curso.precio} </td>
            <td> ${curso.cantidad} </td>  
            <td> 
                <a href="#" class="borrar-curso" data-id="${curso.id}"> X </a>
            </td>      
        `;
        contenedorCarrito.appendChild(row); // Agrega el HTML del carrito en el tbody
    });

    //Agregar el carrito de compras al storage
    sincronizarStorage();
}

function sincronizarStorage(){
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

function limpiarHTML (){
    //Forma lenta
    //contenedorCarrito.innerHTML = '';

    //Forma rapida
    while (contenedorCarrito.firstChild){ // si contenedorCarrito tiene al menos un elemento adentro
        contenedorCarrito.removeChild(contenedorCarrito.firstChild) // un elemento se borra desde el padre o asi mismo
    }

}