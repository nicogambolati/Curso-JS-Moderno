//VARIABLE 
const formulario = document.querySelector('#formulario');
const listaTweets = document.querySelector('#lista-tweets');
let tweets = [];

//EVENT LISTENERS
eventListeners();

function eventListeners(){
    //cuando el usuario crea un nuevo tweet
    formulario.addEventListener ('submit', agregarTweet);

    //cuando el documento esta listo
    document.addEventListener('DOMContentLoaded', recuperarTweets);
}
// FUNCIONES
function agregarTweet(e){
   
    e.preventDefault();
    const tweet = document.querySelector('#tweet').value;

    //Validacion
    if (tweet === ''){
        mostrarError('Un mensaje no puede ir vacio.');
        return // evita que se ejecuten mas lineas del codigo
    }

    const tweetObj = {
        id : Date.now(),  // uso la fecha actual como id
        tweet : tweet
    }

    //Agrega los tweets 
    tweets = [...tweets, tweetObj];
    console.log(tweets);
    crearHTML();
    //Recarga el formulario
    formulario.reset();
}

function mostrarError(error){
    
    const mesanjeError = document.createElement('p');
    mesanjeError.textContent = error;
    mesanjeError.classList.add('error');
    
    const contenido = document.querySelector('#contenido');
    contenido.appendChild(mesanjeError);

    setTimeout(() => {
        mesanjeError.remove();
    },3000);
}

function crearHTML() {
   
    limpiarHTML();

    if(tweets.length > 0){
        tweets.forEach( tweet => {
            
            //Agrega un boton de eliminar
            const btnEliminar = document.createElement('a');
            btnEliminar.classList.add('borrar-tweet');
            btnEliminar.innerText = 'X';
            

            //Añadir funcion Eliminar
            btnEliminar.onclick = () => {
                borrarTweet(tweet.id);
            }
            //Crea el HTML
            const li = document.createElement('li');
            
            //Añadir texto
            li.innerText = tweet.tweet;

            //Añadir boton
            li.appendChild(btnEliminar);
            
            //Insertar el HTML
            listaTweets.appendChild(li);
        });
    }

    sincronizarStorage();
}
//Agrega los tweets actuales al LocalStorage
function sincronizarStorage(){
    localStorage.setItem('tweets', JSON.stringify(tweets));
}

function recuperarTweets(){
    tweets = JSON.parse(localStorage.getItem('tweets')) || []; // Intenta buscar los tweets en localStorage, sino crea uno vacio
    crearHTML();
}

function borrarTweet(id) {
    tweets = tweets.filter(tweet => tweet.id !== id); // Me trae todos los tweets, menos el que quiero eliminar
    console.log(tweets);
    crearHTML();
}


function limpiarHTML(){
    while (listaTweets.firstChild) { // mientras haya elementos
        listaTweets.removeChild(listaTweets.firstChild); // quita el primer hijo que vaya encontrando
    }
}


