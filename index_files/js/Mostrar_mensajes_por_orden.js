// Variable que indica el chat en el que se encuentra el usuario
var chat_index = 0;

var mensajes_chat = document.getElementsByClassName("mensaje");

// Botón que Muestra Mensajes
var buttonMM = document.getElementsByClassName("MM")[chat_index];

// Mostrar los mensajes ocultos del chat seleccionado 1 detrás de otro

  var chats = document.getElementsByClassName("chat");
  var chatP = document.getElementsByClassName("_3h-WS");

  var n1 = -1; // Limitador para mostrar mensajes 1 a 1

// Hace aparecer los mensajes que estan ocultos 1 a 1
function MostrarMensaje() {

  var n = 0;
  var o = 0;

 for(o = 0; o <= chats[chat_index].children.length-1; o++) {
   if(chats[chat_index].children[o].classList[3] === "oculto" || chats[chat_index].children[o].classList[4] === "oculto") {
      n1 = o;
      break; // Cada vez que encuentra, de entre todos los mensajes del chat, un mensaje con la clase 'oculto',
             // se incrementa n1 hasta el valor de la posición de ese mensaje y se sale del bucle
   }
 }

// Busca el 1er mensaje con la clase 'oculto' del chat y le pone la clase 'expuesto' en su lugar (conseguido gracias a la limitación impuesta por n1)
 for(n = 0; n <= n1; n++) {
   if(chats[chat_index].children[n].classList[3] === "oculto" || chats[chat_index].children[n].classList[4] === "oculto") {
      chats[chat_index].children[n].classList.remove("oculto");
      chats[chat_index].children[n].classList.add("expuesto");
   }
 }

}


//Detectar si un mensaje está oculto para encender el botón que los muestra

var MO; // Cantidad Mensajes Ocultos
var MM; // Cantidad Mensajes Expuestos
var divP = document.getElementsByTagName("div");

function PopupLogic() {MO = 0; MM = 0; // Cantidad de Mensajes ocultos
 buttonMM = document.getElementsByClassName("MM")[chat_index];
 for(var i = 2; i <= chats[chat_index].children.length-1; i++) {
   if(chats[chat_index].children[i].classList[3] == "oculto" || chats[chat_index].children[i].classList[4] == "oculto") {
     MO++;
   } else {
     MM++;
   }

   if(MO >= 1) { // Si la cantidad de Mensajes Ocultos es mayor que 1
      buttonMM.classList.remove("/*_3QjfB*/");
      buttonMM.classList.add("_3QjfB"); // Poner al botón color verde
      if(divP["MostrarMensajes()"] != undefined){
        divP["MostrarMensajes()"].style.display = ""; // Mostrar Botón de "Mostrar Mensajes"
      }
     } else { // Si no es 0
       buttonMM.classList.add("/*_3QjfB*/");
       buttonMM.classList.remove("_3QjfB"); // Quitar color verde al botón
       if(divP["MostrarMensajes()"] != undefined){
        divP["MostrarMensajes()"].style.display = "none"; // Ocultar Botón
      }
     }

    if(divP["OcultarMensajes()"] != undefined) {
      if(MM >= 1) { // Si la cantidad de Mensajes Mostrados es mayor que 1
       divP["OcultarMensajes()"].style.display = ""; // Mostrar botón de "Ocultar Mensajes"
     } else {
       divP["OcultarMensajes()"].style.display = "none"; // Ocultar botón
       }
     }
 }
}

document.addEventListener("click", PopupLogic);
document.addEventListener("contextmenu", PopupLogic);
document.addEventListener("mousemove", PopupLogic);

// Ocultar todos los mensajes del chat seleccionado
function OcultarMensajes() {
  
  var i = 2;
  var m1 = mensajes_chat;
  
  for ( i = 2 ; i <= m1.length-1 ; i++ ) {
   if(chats[chat_index].children[i] != undefined) {
      chats[chat_index].children[i].classList.remove("expuesto");
      chats[chat_index].children[i].classList.add("oculto");
   }
  }
}
// Mostrar todos los mensajes del chat seleccionado
function MostrarMensajes() {
  
  var i = 2;
  var m1 = mensajes_chat;
  
  for ( i = 2 ; i <= m1.length-1 ; i++ ) {
   if(chats[chat_index].children[i] != undefined) {
      chats[chat_index].children[i].classList.remove("oculto");
      chats[chat_index].children[i].classList.add("expuesto");
   }
  }
}
