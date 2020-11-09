// Variable que indica el chat en el que se encuentra el usuario
var chat_index = 0;

var mensajes_chat = document.getElementsByClassName("mensaje");

// Mostrar los mensajes ocultos del chat seleccionado 1 detrás de otro

  var chats = document.getElementsByClassName("chat");

  var n1 = -1; // Limitador para mostrar mensajes 1 a 1

// Hace aparecer los mensajes que estan ocultos 1 a 1
function MostrarMensaje() {

  var n = 0;
  var o = 0; // 

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