// Botón para desplegar el menu lateral de chats

var lista_chats = document.getElementById("Lista de Chats");

var p = 0;
function ListaChats() {

if(p === 0) {
    lista_chats.style.display = "none";
    p = 1;
  
} else {
  lista_chats.style.display = "";
  p = 0;
  
}
  
}