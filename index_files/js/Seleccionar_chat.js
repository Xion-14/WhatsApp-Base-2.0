// Cambiar de color el chat seleccionado al hacer click

var chatGlobal = document.getElementById("Chat");
var lista_de_chats = document.getElementsByClassName("CIL"); // Lista de los paneles de chats

// 'Div' que permite ir al último mensaje de un chat
var bottom_chat = document.getElementsByClassName("bottom"); // Hay uno en cada chat si le agraga la id 'bottom' al que se encuentra en el chat seleccionado


// Adaptar la posicion de los chats solo moviendolos de posicion en el codigo
function ChatFit() {PosicionMensaje();

	for(var i = 0; i <= lista_de_chats.length - 1; i++) {
		lista_de_chats[i].style.zIndex = ""+i+"";
		lista_de_chats[i].style.transform = " translateY("+72*i+"px)";
		document.getElementsByTagName("div")["Tamaño_del_Chat"].style.height = ""+72*lista_de_chats.length+"px";
		
        if(chat_index >= 0) {
			if(chats_name[chat_index].style.display == "") {
				// variable declarada en "Seleccionar_chat.js" en la función "CambiarChat(index)"
				noChat.style.display = "none"; // Corregir el error de la pantalla de 'no chat' al dirigirse al último mensaje
			} else {noChat.style.display = "";}
		}
	}
}
setInterval(ChatFit, 1);


// Cambiar de Chat al hacer click en uno mediante la comparación del valor del atributo 'class'
// Añade la id="bottom" unicamente al 'div' del chat selecionado con la clase 'bottom'
var chats_name = document.getElementsByClassName("_2WG1s");
if(chat_index >= 0) {
    bottom_chat[chat_index].setAttribute("id", "bottom");
}


var paneSide = document.getElementById("pane-side"); // Zona de los panles
function CambiarChat() {
	 ColorChat();
	 ChatSelect();
	     
     MandarMensaje(); // Actualizar el popup del contexmenu al cambiar de chat
}
paneSide.addEventListener("click", CambiarChat);



// Borra el color de selección de todos los chats del panel mediante la eliminación de la clase '_13opk'
function ColorChat() {
    var lc = lista_de_chats;
    // Borrar todas las selecciones de click si las hay
    for (var i = 0; i < lc.length; i++) {
        // Quitar La clase '_13opk'
        lc[i].children[0].children[0].classList.remove('_13opk');
    }
    // Iluminar el panel de chat clickeado
    if(chat_index >= 0) {
		for (var i = 0; i < lc.length; i++) {
			if(lc[i].children[0].children[0] == lc[chat_index].children[0].children[0]) {
				// Añadir la clase '_13opk' que ilumina el panel de chat
				lc[i].children[0].children[0].classList.add('_13opk');
			}
		}
    }	
}

// Selecciona el chat al que se le hace click
function ChatSelect() {

    var lc = lista_de_chats;
    for(var i = 0; i < lista_de_chats.length; i++) {
    
		 if(chats_name[i] != undefined) {
			chats_name[i].style.display = "none"; // Ocultar todos los chats al hacer click
			bottom_chat[i].removeAttribute("id"); // Quitar la id de los 'DIV.bottom'
		 }

		 lc[i].addEventListener("click", function() {

			if(Array.prototype.indexOf.call(lc, this) < chats_name.length) { // Controlar que el valor que se le da a 'chat_index' no se sale de la longitud de 'chats_name'
				// Obtiene la Posición del chat seleccionado
				// 'Array.prototype.indexOf.call()' es lo que define siempre a 'chat_index'
			    chat_index = Array.prototype.indexOf.call(lc, this); // Array.prototype.indexOf.call(collection, element);
			}
            
            //console.log(chat_index);

		 });

     }

     if(chat_index >= 0) {
         chats_name[chat_index].style.display = ""; // Mostar el chat seleccionado
         bottom_chat[chat_index].setAttribute("id", "bottom"); // Agregar la id 'bottom' al 'div' que se encuentra en el chat seleccionado
     }

}

ChatSelect();

// Ocultar todos los chats (Función en la foto de Perfil)
function HideChats() {
	var lc = lista_de_chats;
	for(var i = 0; i < lista_de_chats.length; i++) {
		 if(chats_name[i] != undefined) {
			chats_name[i].style.display = "none"; // Ocultar todos los chats al hacer click
			lc[i].children[0].children[0].classList.remove('_13opk'); // Borrar todas las selecciones de click si las hay
			bottom_chat[i].removeAttribute("id"); // Quitar la id de los 'DIV.bottom'
			noChat.style.display = ""; // Mostar pantalla de 'noChat'
			chat_index = -1; // Reiniciar el valor de 'chat_index' para evitar que al hacer click en un panel de chat sin chat correspondiente se muestre el último mostrado
		 }
	}
}
var perfilP = document.getElementsByClassName("_1MXsz")[0].children[0].children[0];
perfilP.addEventListener("click", HideChats);
