const btnFlotante = document.querySelector('.btn-flotante');
const footer = document.querySelector('.footer');

btnFlotante.addEventListener('click', mostrarOcultarFooter);

function mostrarOcultarFooter (){
    if(footer.classList.contains('activo')){  // la primera vez que hagamos click no va a tener la clase 'activo' por lo tanto cae en el elese y se la agrega
        footer.classList.remove('activo'); // si vuelvo a dar click entra en esta parte y se la quita
        this.classList.remove('activo');
        this.textContent = 'Idioma y Moneda';
    } else {
        footer.classList.add('activo');
        this.classList.add('activo');
        this.textContent = 'X Carrar';
    }
}