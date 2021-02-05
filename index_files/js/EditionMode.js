// Modo Edición

// Se han comentado la clase "m61XR" en los iconos de la lista de chats al no aportar nada
// y al dificultar el uso del modo edición para el icono de "mensajes sin leer" de un chat


// Variable que controla cuando se está en modo edición
var edit = 0;
// Función que controla el Modo Edición
function EditionMode() {
    
    var editButton = document.getElementsByTagName("div")["Modo Edicion"]; // Botón para activar el modo edición que se ilumina al estar activado
    if(edit == 0) {

               edit = 1;
               editButton.classList.remove("/*_3QjfB*/");
               editButton.classList.add("_3QjfB");

       } else {edit = 0;
               editButton.classList.add("/*_3QjfB*/");
               editButton.classList.remove("_3QjfB");
               setTimeout(function() { // Corregir la reactivación del menu al tenerlo desplegado y luego eliminarlo haciendo click en el botón de modo edición
                    if(chat_index >= 0) {
                       chatP[chat_index].removeEventListener("contextmenu", PopupOptions); // Deshabilitar menu del click derecho después de haberlo borrado
                    }
                        panelLateral.removeEventListener("contextmenu", PopupOptions2); // Deshabilitar menu del click derecho después de haberlo borrado
                        span_popup[3].innerHTML = "";
               }, 600);
       }

    EditableContent();
    MandarMensaje();
    
}


function EditableContent() {

    var common = document.getElementsByClassName("_3Whw5");
    
    /* Nombre de los mensajes grupales */

        // Cuado está agregado el Contacto
        //var nameM = document.getElementsByClassName("_3Whw5");

        // Cuado No está agregado el Contacto
        var nameT = document.getElementsByClassName("_3UUTc");


    // Hora del mensaje
    var hour = document.getElementsByClassName("_18lLQ");

    // Fecha/Hora Listas de Chat
    var fhLC = document.getElementsByClassName("m61XR");

    // Mensaje NO Leido
    var mNot = document.getElementsByClassName("iBZ7z");

    // Icono de mensajes sin leer de un chat
    var iconM = document.getElementsByClassName("_31gEB");
    
        // Texto de mensaje de agregar contactos
        var contText = document.getElementsByClassName("mIaLg");

        // Botón de agregar contactos
        var contB = document.getElementsByClassName("_16q36");

        // Texto de información de los mensajes de descarga
        var descInfo = document.getElementsByClassName("_17V3H");

    // Pantalla que se muestra cuando no hay chats
    var pnc1 = document.getElementsByClassName("_2dH1A")[0];
    var pnc2 = document.getElementsByClassName("m7gJ2")[0];
    var pnc3 = document.getElementsByClassName("_1LQvt")[0];

    if(edit == 1) {
        // Evitar acceder a un 'link' en modo edición
        onclick = function() {return false}
        
        for(var i=0;i<=common.length-1; i++) {
            common[i].setAttribute("contenteditable", "true");
        }
        /*for(i=0;i<=nameM.length-1; i++) {
            nameM[i].setAttribute("contenteditable", "true");
        }*/
        for(i=0;i<=nameT.length-1; i++) {
            nameT[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=hour.length-1; i++) {
            hour[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=fhLC.length-1; i++) {
            fhLC[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=mNot.length-1; i++) {
            mNot[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=iconM.length-1; i++) {
            iconM[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=contText.length-1; i++) {
            contText[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=contB.length-1; i++) {
            contB[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=descInfo.length-1; i++) {
            descInfo[i].setAttribute("contenteditable", "true");
        }

        pnc1.setAttribute("contenteditable", "true");
        pnc2.setAttribute("contenteditable", "true");
        pnc3.setAttribute("contenteditable", "true");

    } else {
        //Reactivar la activación de 'links'
        onclick = function() {return true}
        
        for(i=0;i<=common.length-1; i++) {
            common[i].removeAttribute("contenteditable");
        }
        /*for(i=0;i<=nameM.length-1; i++) {
            nameM[i].removeAttribute("contenteditable");
        }*/
        for(i=0;i<=nameT.length-1; i++) {
            nameT[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=hour.length-1; i++) {
            hour[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=fhLC.length-1; i++) {
            fhLC[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=mNot.length-1; i++) {
            mNot[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=iconM.length-1; i++) {
            iconM[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=contText.length-1; i++) {
            contText[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=contB.length-1; i++) {
            contB[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=descInfo.length-1; i++) {
            descInfo[i].removeAttribute("contenteditable");
        }

        pnc1.removeAttribute("contenteditable");
        pnc2.removeAttribute("contenteditable");
        pnc3.removeAttribute("contenteditable");

    }

}