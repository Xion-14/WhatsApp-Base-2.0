// Botón para desplegar el menu lateral de chats

var lista_chats = document.getElementById("Lista-de-Chats");

var p = 0;
function ListaChats() {

if(p === 0) {
    chatGlobal.classList.add("hide");
    lista_chats.classList.add("hide");
    p = 1;
  
} else {
    chatGlobal.classList.remove("hide");
    lista_chats.classList.remove("hide");
  p = 0;
  
}
  
}
