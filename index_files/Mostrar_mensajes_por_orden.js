// Botón que hace aparecer los mensajes que estan ocultos 1 a 1

var mensajes_chat = document.getElementsByClassName("mensaje");
var mensajes_ocultos = document.getElementsByClassName("oculto");
var r = -1;

// Variable que indica el chat en el que se encuentra el usuario
var chat_index = 0;

/*
Función que añade la clase 'expuesto' a los mensajes que tienen 'display = ""'
y la clase 'oculto' a los que tiene 'display = "none"'
*/

function AddClassHidden() {
    i = 0;

    for ( i = 0 ; i <= mensajes_chat.length-1 ; i++ ) {
       if(mensajes_chat[i].style.display === "none") {
          mensajes_chat[i].classList.add('oculto');
          mensajes_chat[i].classList.remove('expuesto');

       } else { mensajes_chat[i].classList.add('expuesto');
	 mensajes_chat[i].classList.remove('oculto');
         }
    }
}

setInterval(AddClassHidden, 1);

// Mostrar los mensajes ocultos del chat seleccionado 1 detrás de otro

  var chats = document.getElementsByClassName("chat");


  var n1 = -1;

function MostrarMensaje() {

  var n = 0;
  var o = 0;

 for(o = 0; o <= chats[chat_index].children.length-1; o++) {
   if(chats[chat_index].children[o].classList[3] === "oculto" || chats[chat_index].children[o].classList[4] === "oculto") {
      n1 = o;
      break;
   }
 }

 for(n = 0; n <= n1; n++) {
    if(chats[chat_index].children[n].classList[3] === "oculto" || chats[chat_index].children[n].classList[4] === "oculto") {
       chats[chat_index].children[n].style.display = "";
    }
 }
}

// Ocultar todos los mensajes del chat seleccionado
function OcultarMensajes() {
  
  var i = 2;
  var m1 = mensajes_chat;
  
  for ( i = 2 ; i <= m1.length-1 ; i++ ) {
    
   chats[chat_index].children[i].style.display = "none";
    
  }
}