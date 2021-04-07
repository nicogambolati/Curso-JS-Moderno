const aprendiendo = function(tecnologia, tecnologia2){
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('JavaScript', 'Node.js');

//****ARROW FUNCTIONS (otra forma de declarar funciones)****/

// *cuando le paso un solo parametro no hace falta poner parentesis
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}.`;


// *Cuando le paso mas de 1 parametro es obligatorio poner parentesis
const aprendiendo3 = (tecnologia,tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}.`;


console.log(aprendiendo2('JavaScript'));
console.log(aprendiendo3('JavaScript', 'Node.js'));