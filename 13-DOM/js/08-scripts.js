//TRAVERSING IN THE DOM => IR NAVENGANDO POR LOS DIFERENTES ELEMENTOS DEL DOM
const navegancion = document.querySelector('.navegacion');

console.log(navegancion);
console.log(navegancion.firstChild); // trae el primer elemento
console.log(navegancion.lastChild); // trae el ultimo elemento


console.log(navegancion.childNodes); // los espacios en blanco son cosiderados elementos
console.log(navegancion.children); // los espacios en blanco son consedirados elementos


console.log(navegancion.children[1].nodeName);
console.log(navegancion.children[1].nodeType);

const card = document.querySelector('.card');
console.log(card.children[1].children[1].textContent); // Me voy metiendo dentro de los hijos del elemento padre



// traversing the hijo a padre
console.log(card.parentNode);
// o tambien 
console.log(card.parentElement); 


//traversing the hermano a hermano 
console.log(card);
console.log(card.nextElementSibling);


//se regresa a un elemento antes
const ultimoCard = document.querySelector ('.card:nth-child(4)');
console.log(ultimoCard.previousElementSibling);
