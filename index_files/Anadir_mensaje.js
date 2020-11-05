// Añadir nuevo mensaje.
// vW7d1 = Clase de los mensajes del chat y de otras cosas dentro del chat.
// Las variable deben ser locales (dentro de la función) para que funcione correctamente, si no solo clonara una vez.


// var mensajes_chat = document.getElementsByClassName("mensaje");

var chats = document.getElementsByClassName("chat");


function AddMessage(){

var mensaje_clon = chats[chat_index].children[2].cloneNode(true);

var mensaje_nuevo = mensaje_clon;

  chats[chat_index].appendChild(mensaje_nuevo);

}