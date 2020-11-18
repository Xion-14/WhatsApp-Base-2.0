// Botón para activar música de fondo

var music = document.createElement('audio');
//music.src = "index_files/assets/media/Sonic Unleashed - Main Theme.mp3";
music.setAttribute("loop", "");
var u = 0;

function BGMusic() {
var icon = document.getElementsByClassName("BGM_Icon");   
var j = 0;
  music.play();
  
if(u === 0) { for( j = 0; j <= icon.length - 1; j++ ) {
    music.muted = true;
    icon[j].setAttribute("src","index_files/assets/Music OFF.svg");
    u = 1;
    }

} else { for( j = 0; j <= icon.length - 1; j++ ) {
    music.muted = false;
    icon[j].setAttribute("src","index_files/assets/Music ON.svg");
    u = 0;
    }  

}  
}

// Variable que modifica la musica que suena al cambiar de chat
var music_index = ""; // Valor por defecto al empezar del music.src
var musicPlaying = music_index; // Variable con el proposito de evitar que la música que está sonando se resproduzca desde el principio al hacer click de nuevo sobre su panel de chat correspondiente

function ChangeBGMChat(music_index) {
  
    if(musicPlaying != music_index) {
      musicPlaying = music_index;
      music.src = music_index;
      music.play();
    }

}

/*
Habrá que hacer click en la página para que se muestre su contenido (medida tomada por la limitación de "autoplay" en local),
ya que no se permite el "autoplay en local.
*/


var welcome_text = document.getElementById("welcome_text");
/*
function OcultarAviso(){
  
  var aviso = document.getElementById("aviso");
  var app = document.getElementById("app");

  aviso.style.display = "none";
  welcome_text.style.display = "none";
  app.style.display = "";  
}
*/
function MostrarAviso(){
  aviso.style.display = "";
  welcome_text.style.display = "none";
  app.style.display = "none";
}
