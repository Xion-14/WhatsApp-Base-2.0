// Cambiar de color el chat seleccionado al hacer click

var chatGlobal = document.getElementById("Chat");

var chats_pannel = document.getElementsByClassName('eJ0yJ');
var index = -1; // Valor que devuelven los chats del panel al ser clickados y que se usa para determinar cual ha sido clickado
var bottom_chat = document.getElementsByClassName("bottom");

// Borra el color de selección de todos los chats del panel mediante la eliminación de la clase '_13opk'
// Función que se activa al hacer click en cualquiera de los chats del panel
function ColorChat() {
 var i = 0;
 var j = 0;
    
    // Borrar todas las selecciones de click si las hay
    for (i = 0; i < chats_pannel.length; i++) {
        // Quitar La clase "_13opk"
        chats_pannel[i].classList.remove('_13opk');
    }
}

// Funcion que determina que chat del panel ha sido clickado
function OnclickCheck(index) {
var j = 0;
    for (j = 0; j < chats_pannel.length; j++) {
        if(chats_pannel[j] == chats_pannel[index]) {
            chats_pannel[j].classList.add('_13opk');
        }
        }
}

// Añadir funciones "onclick" a todos los chats del panel continuamente

var lista_de_chats = document.getElementsByClassName("CIL");

function AddOnclick(){
var i = 0;

	for(i = 0; i <= lista_de_chats.length - 1; i++) {

	lista_de_chats[i].setAttribute("onclick","ColorChat(); OnclickCheck("+i+")");

}
}
setInterval( AddOnclick, 1);


// Adaptar la posicion de los chats solo moviendolos de posicion en el codigo


function ChatFit() {
	var i = 0;

	for(i = 0; i <= lista_de_chats.length - 1; i++) {
		lista_de_chats[i].style.zIndex = ""+i+"";
		lista_de_chats[i].style.transform = " translateY("+72*i+"px)";
		document.getElementsByTagName("div")["Tamaño_del_Chat"].style.height = ""+72*lista_de_chats.length+"px";
	}
}
setInterval( ChatFit, 1);

// Cambiar de Chat al hacer click en uno mediante la comparación del valor del atributo 'class'
// Añade la id="bottom" unicamente al 'div' del chat selecionado con la clase 'bottom'
var chats_name = document.getElementsByClassName("_2WG1s");

bottom_chat[chat_index].setAttribute("id", "bottom");

function CambiarChat() {
var i = 0;

     for(i = 0; i <= chats_name.length - 1; i++) {
		 chats_name[i].style.display = "none";
		 bottom_chat[i].removeAttribute("id", "bottom");
		 if(lista_de_chats[i].childNodes[0].childNodes[0].classList.contains("eJ0yJ _13opk")) {
			 chats_name[i].style.display = "";
			 chat_index = i;
			 bottom_chat[chat_index].setAttribute("id", "bottom");
		 }
     }

     MandarMensaje(); // Actualizar el popup del contexmenu al cambiar de chat
}
