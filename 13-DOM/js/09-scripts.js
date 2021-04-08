const primerEnlace = document.querySelector('a');
primerEnlace.remove();


//ELIMINAR DESDE EL PADRE
const navegancion = document.querySelector('.navegacion');
console.log(navegancion.children);
navegancion.removeChild(navegancion.children[2]);