// Conjunto de funciones necesarias de los Easter Eggs

var buscador = document.getElementsByClassName("buscador")[0];
var buscador_bg_texto = document.getElementsByClassName("J3VFH")[0];
var easter_egg = document.getElementById("easter_egg");
var m_muted = false;

function myBuscador() {
 if(buscador.innerText != "") {
    buscador_bg_texto.style.visibility = "hidden";
 } else { buscador_bg_texto.style.visibility = "visible"; }
}

buscador.addEventListener("keydown", myBuscador);

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

  setInterval(function() { if(easter_egg.ended == true) {
              document.body.setAttribute("onclick", "OcultarAviso(); music.play()");
              OcultarAviso();
              if(m_muted === false) { BGMusic(); }; easter_egg.style.display = "none";
              easter_egg.currentTime = 0;
              };
  }, 1);

}

setInterval(myBuscador, 1);



// Terra Final Fantasy VI

// Pixel
var O = "%c  ";

// Colores
var vC = "background: #80A880"; // Verde Claro
var vO = "background: #285038"; // Verde Oscuro
var vU = "background: #133030"; // Verde Oscuro 2

var mC = "background: #C880F8"; // Morado Claro
var mO = "background: #8058D8"; // Morado Oscuro

var r = "background: #911918"; // Rojo
var am = "background: #B8900A"; // Amarillo

var cC = "background: #F3C087"; // Carne Claro
var cO = "background: #C86838"; // Carne Oscuro

var n = "background: #000"; // Negro
var b = "background: #FFF"; // Blanco
var t = ""; // Pixel vacío

// 15x24 px
console.log(

// Pixeles
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O+"\n"+
O+O+O+O+O+O+O+O+O+O+O+O+O+O+O
,

// Colores
t ,t ,t ,t ,n ,n ,t ,n ,n ,n ,mO,mO,n ,t ,t ,
t ,t ,t ,n ,vO,vO,vO,vO,vO,vO,n ,mO,mC,n ,t ,
t ,n ,n ,vC,vC,vC,vO,vC,vC,vC,vC,n ,mO,n ,n ,
n ,vC,vC,vO,vC,b ,vC,vC,b ,vC,vC,vO,n ,vC,n ,
t ,n ,n ,vC,vC,vC,vC,vC,vC,vO,vC,vO,n ,vC,n ,
t ,n ,vC,vO,vO,cC,vO,vO,b ,vO,vC,vO,n ,vC,n ,
t ,n ,b ,vO,cO,cC,b ,vO,b ,vC,vO,vO,n ,vO,n ,
t ,n ,vC,vO,cO,cC,b ,cO,vO,vC,vC,vO,n ,vO,n ,
t ,t ,n ,vO,n ,n ,cC,n ,n ,n ,vO,n ,vO,n ,t ,
t ,t ,t ,n ,b ,vU,cC,cC,vU,b ,n ,vO,vC,n ,t ,
t ,n ,n ,n ,cC,vU,cC,cC,vU,cC,n ,n ,vO,n ,t ,
n ,mC,mC,mO,n ,cC,cC,cC,cC,n ,mO,mC,mC,n ,t ,
t ,n ,mC,mO,mO,n ,cO,cO,n ,mO,mO,mC,n ,t ,t ,
t ,n ,n ,mC,n ,cC,cC,cC,cC,n ,mC,n ,n ,t ,t ,
t ,n ,cC,n ,am,r ,r ,r ,r ,am,n ,cC,n ,t ,t ,
t ,n ,cC,cO,n ,mO,mC,mC,mO,n ,cO,cC,n ,t ,t ,
n ,cO,r ,n ,cO,r ,r ,r ,r ,cO,n ,r ,cO,n ,t ,
n ,cO,cC,n ,cO,cC,r ,r ,cC,cO,n ,cC,cO,n ,t ,
n ,cO,cC,n ,n ,b ,cO,cO,b ,n ,n ,cC,cO,n ,t ,
t ,n ,n ,n ,r ,cC,cO,cO,cC,r ,n ,n ,n ,t ,t ,
t ,t ,t ,n ,am,r ,r ,r ,r ,am,n ,t ,t ,t ,t ,
t ,t ,t ,n ,r ,am,r ,r ,am,r ,n ,t ,t ,t ,t ,
t ,t ,t ,n ,r ,r ,r ,r ,r ,r ,n ,t ,t ,t ,t ,
t ,t ,t ,t ,n ,am,n ,n ,am,n ,t ,t ,t ,t ,t

)