// Botón para activar música de fondo

var music = document.createElement('audio');
music.src = "index_files/Sonic Unleashed - Main Theme.mp3";
music.setAttribute("loop", "");
var u = 0;

function BGMusic() {
var icon = document.getElementsByClassName("BGM_Icon");   
var j = 0;
  music.play();
  
if(u === 0) { for( j = 0; j <= icon.length - 1; j++ ) {
    music.muted = true;
    icon[j].setAttribute("src","index_files/Music OFF.svg");
    u = 1;
    }

} else { for( j = 0; j <= icon.length - 1; j++ ) {
    music.muted = false;
    icon[j].setAttribute("src","index_files/Music ON.svg");
    u = 0;
    }  

}  
}

var music_index = "index_files/Sonic Unleashed - Main Theme.mp3";

function ChangeBGMChat(music_index) {

music.src = music_index;
music.play();

}

/*
Habrá que hacer click en la página para que se muestre su contenido (medida tomada por la limitación de "autoplay" en local),
ya que no se permite el "autoplay en local.
*/


var welcome_text = document.getElementById("welcome_text");

function OcultarAviso(){
  
var aviso = document.getElementById("aviso");
var app = document.getElementById("app");

  welcome_text.style.display = "none";
  aviso.style.display = "none";
  app.style.display = "";
  
}

function MostrarAviso(){
  welcome_text.style.display = "";
  aviso.style.display = "";
  app.style.display = "none";
}