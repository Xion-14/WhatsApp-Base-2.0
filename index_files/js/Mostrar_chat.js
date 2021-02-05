// Botón para desplegar el menu lateral de chats

var panelLateral = document.getElementById("Lista-de-Chats");

var p = 0;
function ListaChats() {

if(p === 0) {
    chatContainer.classList.add("hide");
    panelLateral.classList.add("hide");
    p = 1;
  
} else {
    chatContainer.classList.remove("hide");
    panelLateral.classList.remove("hide");
  p = 0;
  
}
  
}
