var footer = document.getElementsByTagName('footer')[chat_index];
var footerInput = footer.children[0].children[1].children[0].children[1];
var footerValue = footerInput.innerText;

function MandarMensaje() {
    
    footer = document.getElementsByTagName('footer')[chat_index];
    footerInput = footer.children[0].children[1].children[0].children[1];
    footerValue = footerInput.innerText;

    function nuevoMensaje() {

        var m = document.createElement('div');

        // Mensaje mandado
        m.setAttribute('class', '_2hqOq /*_28DtS*/ message-out mensaje expuesto');

        // Mensaje recibido
        //m.setAttribute('class', '_2hqOq /*_28DtS*/ message-in mensaje expuesto');
        
        
        //Mensaje con check
        //m.innerHTML = '<span></span><div class="_2et95 _3c94e _1dvTE"><span data-testid="tail" data-icon="tail" class="_2-dPL"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z" class="cola"></path></svg></span><div class="_3sKvP wQZ0F"><div class="_274yw"><div class="zGvn8 color-2 _23x7I" role="" hide-name="true"><span dir="auto" class="FMlAw FdF4z _3Whw5">Nombre</span></div><div class="_11PeL copyable-text" data-pre-plain-text="[11:01 a.&nbsp;m., 4/9/2020] Angelo: "><div class="eRacY" dir="ltr"><span dir="ltr" class="_3Whw5 selectable-text invisible-space copyable-text"><span>Understandable</span></span><span class="_2oWZe _2HWXK"></span></div></div><div class="_2frDn"><div class="VGBA3"><span class="_18lLQ" dir="auto">11:01 a.&nbsp;m.</span><div class="_1qPwk"><span data-testid="msg-dblcheck" aria-label=" Entregado " data-icon="msg-dblcheck" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span></div></div></div></div><span></span></div></div>';

        // Mensaje con check azul
        m.innerHTML = '<span></span><div class="_2et95 _3c94e _1dvTE"><span data-testid="tail" data-icon="tail" class="_2-dPL"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z" class="cola"></path></svg></span><div class="_3sKvP wQZ0F"><div class="_274yw"><div class="zGvn8 color-2 _23x7I" role="" hide-name="true"><span dir="auto" class="FMlAw FdF4z _3Whw5">Nombre</span></div><div class="_11PeL copyable-text" data-pre-plain-text="[11:01 a.&nbsp;m., 4/9/2020] Angelo: "><div class="eRacY" dir="ltr"><span dir="ltr" class="_3Whw5 selectable-text invisible-space copyable-text"><span>Understandable</span></span><span class="_2oWZe _2HWXK"></span></div></div><div class="_2frDn"><div class="VGBA3"><span class="_18lLQ" dir="auto">11:01 a.&nbsp;m.</span><div class="_1qPwk"><span data-testid="msg-dblcheck" aria-label=" Leído " data-icon="msg-dblcheck" class="_3xkAl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span></div></div></div></div><span></span></div></div>';
        
        //Mensaje con 1 solo check
        //m.innerHTML = '<span></span><div class="_2et95 _3c94e _1dvTE"><span data-testid="tail" data-icon="tail" class="_2-dPL"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z" class="cola"></path></svg></span><div class="_3sKvP wQZ0F"><div class="_274yw"><div class="zGvn8 color-2 _23x7I" role="" hide-name="true"><span dir="auto" class="FMlAw FdF4z _3Whw5">Nombre</span></div><div class="_11PeL copyable-text" data-pre-plain-text="[11:01 a.&nbsp;m., 4/9/2020] Angelo: "><div class="eRacY" dir="ltr"><span dir="ltr" class="_3Whw5 selectable-text invisible-space copyable-text"><span>Understandable</span></span><span class="_2oWZe _2HWXK"></span></div></div><div class="_2frDn"><div class="VGBA3"><span class="_18lLQ" dir="auto">11:01 a.&nbsp;m.</span><div class="_1qPwk"><span data-testid="msg-check" aria-label=" Enviado " data-icon="msg-check" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span></div></div></div></div><span></span></div></div>';

        // Mensaje sin check
        //m.innerHTML = '<span></span><div class="_2et95 _3c94e _1dvTE"><span data-testid="tail" data-icon="tail" class="_2-dPL"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z" class="cola"></path></svg></span><div class="_3sKvP wQZ0F"><div class="_274yw"><div class="zGvn8 color-2 _23x7I" role="" hide-name="true"><span dir="auto" class="FMlAw FdF4z _3Whw5">Nombre</span></div><div class="_11PeL copyable-text" data-pre-plain-text="[11:01 a.&nbsp;m., 4/9/2020] Angelo: "><div class="eRacY" dir="ltr"><span dir="ltr" class="_3Whw5 selectable-text invisible-space copyable-text"><span>Understandable</span></span><span class="_2oWZe /*_2HWXK*/"></span></div></div><div class="_2frDn"><div class="VGBA3"><span class="_18lLQ" dir="auto">11:01 a.&nbsp;m.</span><div class="_1qPwk"><span data-testid="msg-dblcheck" aria-label=" Leído " data-icon="msg-dblcheck" class="_3xkAl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span></div></div></div></div><span></span></div></div>';


        // Texto mensaje
        m.children[1].children[1].children[0].children[1].children[0].children[0].children[0].
        innerHTML = footerValue;
        
        chats[chat_index].appendChild(m);
        
        location.href = '#bottom';

    }

    // Evitar salto de linea con Enter
    onkeydown = function(event) {
          if(event.shiftKey) { // Si se presiona 'Shift'

              // Hacer salto de linea

            } else if(event.key == "Enter") {return event.preventDefault();}
        };

    // Mandar mensaje
    footerInput.addEventListener("keyup", function(event) {
        if(event.shiftKey) { // Si se presiona 'Shift'

            // No mandar mensaje

        } else if(footerValue != "" && event.key == "Enter") { // Si hay un texto introducido y se presiona 'Enter', ejecuta la functión
                    nuevoMensaje();
                    footerInput.innerText = ""; // Vaciar entrada al presionar 'Enter'
                    footerInput.focus(); // Selecciona de nuevo la entrada de texto para poder escribir otra vez al haber pulsado 'Enter'
               }

         // Ocultar placeholder cuando haya texto en el footer
         footerValue = footerInput.innerText;
         var footerPH = document.getElementsByClassName("_2FbwG")[chat_index + 1]; // El placeholder del buscador de la lista de chats tambien tiene esta clase por eso el +1 para saltarlo
         if(footerValue != "") {
            footerPH.style.visibility = "hidden";
         } else {footerPH.style.visibility = "visible"}

    });
}
