// Clonar último mensaje del chat
// vW7d1 = Clase de los mensajes del chat y de otras cosas dentro del chat.
// Las variable deben ser locales (dentro de la función) para que funcione correctamente, si no solo clonara una vez.


// var mensajes_chat = document.getElementsByClassName("mensaje");

var chats = document.getElementsByClassName("chat");

function ClonMessage(){
  var mensaje_clon = chats[chat_index].lastElementChild.cloneNode(true);
  var mensaje_nuevo = mensaje_clon;
  if(edit == 1) { // Controlar la clonación de mensajes con el Modo Edición (ir a EditionMode.js)
    chats[chat_index].appendChild(mensaje_nuevo);
    location.href='#bottom';
  }
}