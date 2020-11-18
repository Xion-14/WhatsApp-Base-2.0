// Hacer el contenido necesario editable con el Botón del Lapiz

// Variable que controla cuando se está en modo edición

// Se han comentado la clase "m61XR" en los iconos de la lista de chats al no aportar nada
// y al dificultar el uso del modo edición para el icono de "mensajes sin leer" de un chat

var edit = 1;

function EditableContent() {
    
    var editButton = document.getElementsByTagName("div")["Editar Texto"];

    var common = document.getElementsByClassName("_3Whw5");
    
    /* Nombre de los menajes grupales */

        // Cuado está agregado el Contacto
        var nameM = document.getElementsByClassName("_3Whw5");

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

    // Pantalla que se muestra cuando no hay chats
    var pnc1 = document.getElementsByClassName("_2dH1A")[0];
    var pnc2 = document.getElementsByClassName("m7gJ2")[0];
    var pnc3 = document.getElementsByClassName("_1LQvt")[0];

    if(edit == 1) {
        // Evitar acceder a un 'link' en modo edición
        onclick = function() {return false}
        editButton.classList.remove("/*_3QjfB*/");
        editButton.classList.add("_3QjfB");
        var i = 0;
        for(i=0;i<=common.length-1; i++) {
            common[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=nameM.length-1; i++) {
            nameM[i].setAttribute("contenteditable", "true");
        }
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

        pnc1.setAttribute("contenteditable", "true");
        pnc2.setAttribute("contenteditable", "true");
        pnc3.setAttribute("contenteditable", "true");

        edit = 0;
    } else {
        //Reactivar la activación de 'links'
        onclick = function() {return true}
        editButton.classList.add("/*_3QjfB*/");
        editButton.classList.remove("_3QjfB");
        for(i=0;i<=common.length-1; i++) {
            common[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=nameM.length-1; i++) {
            nameM[i].removeAttribute("contenteditable");
        }
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

        pnc1.removeAttribute("contenteditable");
        pnc2.removeAttribute("contenteditable");
        pnc3.removeAttribute("contenteditable");

        edit = 1;
    }

}