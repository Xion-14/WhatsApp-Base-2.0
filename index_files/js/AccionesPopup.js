// Variable que indica el chat en el que se encuentra el usuario
var chat_index = -1;

// Lista de todos los mensajes de los chats
var mensajes_chat = document.getElementsByClassName("mensaje");
  
  var chats = document.getElementsByClassName("chat");   // Lista de todos los chats
  var chatP = document.getElementsByClassName("_3h-WS"); // Lista de los chats pero sin 'header' ni 'footer' (la zona visible del chat donde se ve su contenido, sirve como referencia a sus dimensiones)

// Hace aparecer los mensajes que estan ocultos 1 a 1
function MostrarMensaje() {

 var n1 = -1; // Limitador para mostrar mensajes 1 a 1

 for(i = 0; i<= chats[chat_index].children.length-1; i++) {
   if(chats[chat_index].children[i].classList.contains("oculto")) {
      n1 = i;
      break; // Cada vez que encuentra, de entre todos los mensajes del chat, un mensaje con la clase 'oculto',
             // se incrementa n1 hasta el valor de la posición de ese mensaje y se sale del bucle
   }
 }

 // Busca el 1er mensaje con la clase 'oculto' del chat y le pone la clase 'expuesto' en su lugar (conseguido gracias a la limitación impuesta por n1)
 for(var i = 0; i <= n1; i++) {
   if(chats[chat_index].children[i].classList.contains("oculto")) {
      chats[chat_index].children[i].classList.remove("oculto");
      chats[chat_index].children[i].classList.add("expuesto");
   }
 }
}


// Ocultar todos los mensajes del chat seleccionado
function OcultarMensajes() {
  
  var m1 = mensajes_chat;
  
  for(var i = 2 ; i <= m1.length-1 ; i++) {
   if(chats[chat_index].children[i] != undefined) {
      chats[chat_index].children[i].classList.remove("expuesto");
      chats[chat_index].children[i].classList.add("oculto");
   }
  }
}

// Mostrar todos los mensajes del chat seleccionado
function MostrarMensajes() {
  
  var m1 = mensajes_chat;
  
  for(var i = 2 ; i <= m1.length-1 ; i++) {
   if(chats[chat_index].children[i] != undefined) {
      chats[chat_index].children[i].classList.remove("oculto");
      chats[chat_index].children[i].classList.add("expuesto");
   }
  }
}
