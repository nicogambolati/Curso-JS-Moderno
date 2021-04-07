const reproductor = {
    reproducir: function(id) {
        console.log(`Reproduciendo cancion con el id ${id}`);
    },
    pausar: function (){
        console.log('Pausando...');
    },
    borrar: function (id){
        console.log(`Borrando cancion ${id}...`);
    },
    crearPlaylist: function (nombre){
        console.log(`Creando la playlist de ${nombre}`);
    },
    repoducirPlaylist: function (nombre){
        console.log (`Reproducir la playlist de ${nombre}`);
    }
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar();
reproductor.borrar(30);
reproductor.crearPlaylist('Heavy Metal');
reproductor.crearPlaylist('Rock 90s');
reproductor.repoducirPlaylist('Heavy Metal');