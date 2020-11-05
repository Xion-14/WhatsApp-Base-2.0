// Conjunto de funciones necesarias de los Easter Eggs

var buscador = document.getElementsByClassName("_3FRCZ")[0];
var buscador_bg_texto = document.getElementsByClassName("J3VFH")[0];
var easter_egg = document.getElementById("easter_egg");
var m_muted = false;

function myBuscador() {
 if(buscador.innerText != "") {
    buscador_bg_texto.style.display = "none";
 } else { buscador_bg_texto.style.display = ""; }
}

buscador.addEventListener("keypress", myBuscador);

function StartEasterEgg() {

    m_muted = false;
    if(music.muted === false) { BGMusic(); } else { m_muted = true; };
    document.getElementsByTagName("body")[0].setAttribute("onclick", "music.play()");
    aviso.style.display = "";
    app.style.display = "none";
    easter_egg.style.display = "";
    easter_egg.currentTime = 0;
    easter_egg.play();

}

function EndEasterEgg() {

  setInterval(function() { if(easter_egg.ended == true) {
              document.getElementsByTagName("body")[0].setAttribute("onclick", "OcultarAviso(); music.play()");
              OcultarAviso();
              if(m_muted === false) { BGMusic(); }; easter_egg.style.display = "none";
              easter_egg.currentTime = 0;
              };
  }, 1);

}

setInterval(myBuscador, 1);