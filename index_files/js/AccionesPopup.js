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
  for(var i = 0 ; i <= chats[chat_index].children.length-1 ; i++) {
   if(chats[chat_index].children[i] != undefined && chats[chat_index].children[i].classList.contains("mensaje")) {
      chats[chat_index].children[i].classList.remove("expuesto");
      chats[chat_index].children[i].classList.add("oculto");
   }
  }
}

// Mostrar todos los mensajes del chat seleccionado
function MostrarMensajes() {  
  for(var i = 0 ; i <= chats[chat_index].children.length-1 ; i++) {
   if(chats[chat_index].children[i] != undefined && chats[chat_index].children[i].classList.contains("mensaje")) {
      chats[chat_index].children[i].classList.remove("oculto");
      chats[chat_index].children[i].classList.add("expuesto");
   }
  }
}

// Mostrar/Ocultar nombres de los mensajes

// Lista de mensajes o respuestas con nombres a mostrar u ocultar
var mNames = document.getElementsByClassName("nombre");
var mAnswers = document.getElementsByClassName("respuesta");
var nR; // Mensaje con respuesta seleccionado

// Lista de nombres de los mensajes 
var names = document.getElementsByClassName("zGvn8");
var nS; // Nombre Seleccionado

// Lista de las respuestas de los mensajes
var answers = document.getElementsByClassName("_3AFCK");
var nA; // Respuesta seleccionada

var nM; // Mensaje Seleccionado

function PosicionMensaje() { // Obtiene la posición del mensaje seleccionado con 'click derecho'

  for(var i = 0; i < mensajes_chat.length; i++) {
    mensajes_chat[i].addEventListener("contextmenu", function() {
      // Obtiene la Posición del mensaje seleccionado
      nM = Array.prototype.indexOf.call(mensajes_chat, this); // Array.prototype.indexOf.call(collection, element);
    });
  }

  for(var i = 0; i < mNames.length; i++) {
    mNames[i].addEventListener("contextmenu", function() {
      // Obtiene la Posición del mensaje seleccionado
      nS = Array.prototype.indexOf.call(mNames, this); // Array.prototype.indexOf.call(collection, element);
    });
  }

  for(var i = 0; i < answers.length; i++) {
    answers[i].addEventListener("contextmenu", function() {
      // Obtiene la Posición del mensaje seleccionado
      setTimeout(function() {nS = -1;}, 0); // Reiniciar valor al hacer 'click derecho' en una respuesta para no modificar el estado del nombre del mensaje anterior
      nA = Array.prototype.indexOf.call(answers, this); // Array.prototype.indexOf.call(collection, element);
    });
  }

  for(var i = 0; i < mAnswers.length; i++) {
    mAnswers[i].addEventListener("contextmenu", function() {
      // Obtiene la Posición del mensaje seleccionado
      nR = Array.prototype.indexOf.call(mAnswers, this); // Array.prototype.indexOf.call(collection, element);
    });
  }

  for(var i = 0; i < mNames.length; i++) {
    mNames[i].addEventListener("oncontextmenu", PosicionMensaje);
  }

}
PosicionMensaje();

var mAC; // Nombre de las respuestas
function MostrarOcultarNombres() { // Todos los mensajes y respuestas con nombre tienen la clase 'nombre' pero solo la usan como tal los mensajes normales, pero para que funcione correctamente tienen que tenerlo tambien las respuestas con nombre para que el array de 'nombres' coincida con el array de 'mensajes y respuestas con nombre'
    
  if(names[nS] != undefined) {
    if(names[nS].getAttribute("hide-name") == "false") {
        names[nS].setAttribute("hide-name", "true");
    } else {names[nS].setAttribute("hide-name", "false");}
  } nS = -1; // Reiniciar valor para evitar que se almacene
    nR = -1; // Reiniciar valor para evitar que se almacene

  if(answers[nA] != undefined) {
    mAC = answers[nA].children[0].children[0].children[1].children[0].children[0];
  }

  if(mAC != undefined) {
    if(mAC.getAttribute("hide-name") == "false") {
        mAC.setAttribute("hide-name", "true");
    } else {mAC.setAttribute("hide-name", "false");}
  } nA = -1; // Reiniciar valor para evitar que se almacene
  
}

// Mostrar/Ocultar respuesta de los mensajes
function MostrarOcultarRespuestas() {

  if(answers[nR] != undefined) {
    if(answers[nR].getAttribute("hide-answer") == "false") {
        answers[nR].setAttribute("hide-answer", "true");
    } else {answers[nR].setAttribute("hide-answer", "false");}
  } nR = -1; // Reiniciar valor para evitar que se almacene
  
}

// Eliminar Mensaje
function EliminarMensaje() {
  if(mensajes_chat[nM] != undefined) {

    mensajes_chat[nM].style.transition = "height 0.7s, margin 0.7s";

    // Para que el efecto de transición funcione tiene que tener una altura ya definida
    mensajes_chat[nM].style.height = mensajes_chat[nM].offsetHeight + "px";
    
    setTimeout(function() {
      mensajes_chat[nM].style.height = "0";
      mensajes_chat[nM].style.marginBottom = "0";
    }, 0);
    
    setTimeout(function() {
      mensajes_chat[nM].remove();
      nM = -1; // Reiniciar valor para evitar que se almacene
    }, 1000);

  }
}
