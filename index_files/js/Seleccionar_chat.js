// Cambiar de color el chat seleccionado al hacer click

var chatContainer = document.getElementById("Chat"); // Contenedor del propio chat
var chatContent = document.getElementById('Chat Content'); // Contenedor de los mensajes

var chatListContainer = document.getElementById("pane-side"); // Contenedor de la lista de chats
var lista_de_chats = document.getElementsByClassName("CIL"); // Lista de los paneles de chats

// 'Div' que permite ir al último mensaje de un chat
var bottom_chat = document.getElementsByClassName("bottom"); // Hay uno en cada chat y se le agrega la id 'bottom' al que se encuentra en el chat seleccionado	
var chat_index = -1;


// Adaptar la posicion de los chats solo moviendolos de posicion en el codigo
function ChatListFix() {

	for(var i = 0; i <= lista_de_chats.length - 1; i++) {
		lista_de_chats[i].style.zIndex = ""+i+"";
		lista_de_chats[i].style.transform = " translateY("+72*i+"px)";
		document.getElementsByTagName("div")["Tamaño_del_Chat"].style.height = ""+72*lista_de_chats.length+"px";
	}

}


// Detección constante de mensajes para detectar los nuevos. "AccionesPopup.js"
chatContent.addEventListener("DOMNodeInserted", PosicionMensaje);
chatContent.addEventListener("DOMNodeRemoved", PosicionMensaje);

chatListContainer.addEventListener("DOMSubtreeModified", ChatListFix);




function CambiarChat() {
	ColorChat();
	ChatSelect();
	
	// Ocultar 'no Chat' (pantalla de bienvenida)
	noChat.style.display = "none";

    MandarMensaje(); // Actualizar el popup del contexmenu al cambiar de chat
}
chatListContainer.addEventListener("click", CambiarChat);



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

    // Mostra chat si está oculto
    if(chatContainer.children[0].style.display == 'none' && chat_index > -1) {
        chatContainer.children[0].style.display = '';
    }

    var lc = lista_de_chats;
	for(var i = 0; i < lista_de_chats.length; i++) {
		lc[i].addEventListener("click", function() {

			// Obtiene la Posición del chat seleccionado
			// 'Array.prototype.indexOf.call()' es lo que define siempre a 'chat_index'
			chat_index = Array.prototype.indexOf.call(lc, this); // Array.prototype.indexOf.call(collection, element);

		//console.log(chat_index);

		});

	}

}

ChatSelect();

// Ocultar todos los chats (Función en la foto de Perfil)
function HideChats() {
	var lc = lista_de_chats;
	for(var i = 0; i < lista_de_chats.length; i++) {
		 if(chats_name[i] != undefined) {
			chatContainer.children[0].style.display = 'none' // Ocultar el chat al hacer click
			lc[i].children[0].children[0].classList.remove('_13opk'); // Borrar todas las selecciones de click si las hay
			noChat.style.display = ""; // Mostar pantalla de 'noChat'
			chat_index = -1; // Reiniciar el valor de 'chat_index' para evitar que al hacer click en un panel de chat sin chat correspondiente se muestre el último mostrado
		 }
	}
}

var perfilP = document.getElementsByClassName("_1MXsz")[0].children[0].children[0];
perfilP.addEventListener("click", HideChats);
