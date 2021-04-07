// > > > ARROW FUNTIONS < < < 

const reproductor = {
    reproducir: id => console.log(`Reproduciendo cancion con el id ${id}`),
    
    pausar: () => console.log('Pausando...'),
    
    borrar: id => console.log(`Borrando cancion ${id}...`),

    crearPlaylist: nombre => console.log(`Creando la playlist de ${nombre}`),

    repoducirPlaylist: nombre => console.log (`Reproducir la playlist de ${nombre}`),
   
    set nuevaCancion ( cancion ){
        this.cancion = cancion;
        console.log(`Añadiendo ${cancion}`);
    }, 
    get obtenerCancion(){
        console.log (`${this.cancion}`);
    }
}

reproductor.nuevaCancion = 'One More Time';
reproductor.obtenerCancion;


reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');
reproductor.repoducirPlaylist('Heavy Metal');