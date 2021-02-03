// Conjunto de funciones necesarias de los Easter Eggs

var buscador = document.getElementsByClassName("buscador")[0];
var buscador_bg_texto = document.getElementsByClassName("J3VFH")[0];
var easter_egg = document.getElementById("easter_egg");
var m_muted = false;


buscador.addEventListener("keydown", myBuscador);

function myBuscador() {
  if(buscador.innerText != "") {
     buscador_bg_texto.style.visibility = "hidden";
  } else { buscador_bg_texto.style.visibility = "visible"; }
}
setInterval(myBuscador, 10);

// Función para Easter Egg de video
function StartEasterEgg() {

    m_muted = false;
    if(music.muted === false) { BGMusic(); } else { m_muted = true; };
    document.body.setAttribute("onclick", "music.play()");
    aviso.style.display = "";
    app.style.display = "none";
    easter_egg.style.display = "";
    easter_egg.currentTime = 0;
    easter_egg.play();

}

function EndEasterEgg() {

  easter_egg.onended = function() {
    if(easter_egg.ended == true) {
      document.body.setAttribute("onclick", "OcultarAviso(); music.play()");
      OcultarAviso();
      if(m_muted === false) { BGMusic(); };
      easter_egg.style.display = "none";
      easter_egg.currentTime = 0;
    }
  }

}















// Terra Final Fantasy VI

    // Colores
    var bg = 'background: ';
    
    var vC = bg + '#80A880'; // Verde Claro
    var vO = bg + '#285038'; // Verde Oscuro
    var vU = bg + '#133030'; // Verde Oscuro 2

    var mC = bg + '#C880F8'; // Morado Claro
    var mO = bg + '#8058D8'; // Morado Oscuro

    var rj = bg + '#911918'; // Rojo
    var am = bg + '#B8900A'; // Amarillo

    var cC = bg + '#F3C087'; // Carne Claro
    var cO = bg + '#C86838'; // Carne Oscuro

    var ng = bg + '#000'; // Negro
    var bl = bg + '#FFF'; // Blanco
    var tt = bg + 'transparent'; // Pixel con color transparente

function Terra() {

    // Pixel
    var OO = "%c  ";
    
    // 15x24 px
    console.log(

    // Pixeles
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+"\n"+
    OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO+OO
    ,

    // Colores
    tt,tt,tt,tt,ng,ng,tt,ng,ng,ng,mO,mO,ng,tt,tt,
    tt,tt,tt,ng,vO,vO,vO,vO,vO,vO,ng,mO,mC,ng,tt,
    tt,ng,ng,vC,vC,vC,vO,vC,vC,vC,vC,ng,mO,ng,ng,
    ng,vC,vC,vO,vC,bl,vC,vC,bl,vC,vC,vO,ng,vC,ng,
    tt,ng,ng,vC,vC,vC,vC,vC,vC,vO,vC,vO,ng,vC,ng,
    tt,ng,vC,vO,vO,cC,vO,vO,bl,vO,vC,vO,ng,vC,ng,
    tt,ng,bl,vO,cO,cC,bl,vO,bl,vC,vO,vO,ng,vO,ng,
    tt,ng,vC,vO,cO,cC,bl,cO,vO,vC,vC,vO,ng,vO,ng,
    tt,tt,ng,vO,ng,ng,cC,ng,ng,ng,vO,ng,vO,ng,tt,
    tt,tt,tt,ng,bl,vU,cC,cC,vU,bl,ng,vO,vC,ng,tt,
    tt,ng,ng,ng,cC,vU,cC,cC,vU,cC,ng,ng,vO,ng,tt,
    ng,mC,mC,mO,ng,cC,cC,cC,cC,ng,mO,mC,mC,ng,tt,
    tt,ng,mC,mO,mO,ng,cO,cO,ng,mO,mO,mC,ng,tt,tt,
    tt,ng,ng,mC,ng,cC,cC,cC,cC,ng,mC,ng,ng,tt,tt,
    tt,ng,cC,ng,am,rj,rj,rj,rj,am,ng,cC,ng,tt,tt,
    tt,ng,cC,cO,ng,mO,mC,mC,mO,ng,cO,cC,ng,tt,tt,
    ng,cO,rj,ng,cO,rj,rj,rj,rj,cO,ng,rj,cO,ng,tt,
    ng,cO,cC,ng,cO,cC,rj,rj,cC,cO,ng,cC,cO,ng,tt,
    ng,cO,cC,ng,ng,bl,cO,cO,bl,ng,ng,cC,cO,ng,tt,
    tt,ng,ng,ng,rj,cC,cO,cO,cC,rj,ng,ng,ng,tt,tt,
    tt,tt,tt,ng,am,rj,rj,rj,rj,am,ng,tt,tt,tt,tt,
    tt,tt,tt,ng,rj,am,rj,rj,am,rj,ng,tt,tt,tt,tt,
    tt,tt,tt,ng,rj,rj,rj,rj,rj,rj,ng,tt,tt,tt,tt,
    tt,tt,tt,tt,ng,am,ng,ng,am,ng,tt,tt,tt,tt,tt

    )
}

Terra();
