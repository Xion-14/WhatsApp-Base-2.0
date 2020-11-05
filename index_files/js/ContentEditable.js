// Hacer el contenido necesario editable con el Botón del Lapiz

// Variable que controla cuando se está en modo edición
var edit = 1;

function EditableContent() {
    
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

    if(edit == 1) {
        var i = 0;
        for(i=0;i<=common.length; i++) {
            common[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=nameM.length; i++) {
            nameM[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=nameT.length; i++) {
            nameT[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=hour.length; i++) {
            hour[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=fhLC.length; i++) {
            fhLC[i].setAttribute("contenteditable", "true");
        }
        for(i=0;i<=mNot.length; i++) {
            mNot[i].setAttribute("contenteditable", "true");
        }
        edit = 0;
    } else {
        for(i=0;i<=common.length; i++) {
            common[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=nameM.length; i++) {
            nameM[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=nameT.length; i++) {
            nameT[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=hour.length; i++) {
            hour[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=fhLC.length; i++) {
            fhLC[i].removeAttribute("contenteditable");
        }
        for(i=0;i<=mNot.length; i++) {
            mNot[i].removeAttribute("contenteditable");
        }
        edit = 1;
    }

}