var footer = document.getElementsByTagName('footer')[chat_index];
var footerInput = footer.children[0].children[1].children[0].children[1];
var footerValue = footerInput.innerText;

function MandarMensaje() {
    
    footer = document.getElementsByTagName('footer')[chat_index];
    footerInput = footer.children[0].children[1].children[0].children[1];
    footerValue = footerInput.innerHTML;

    function nuevoMensaje() {

        var m = document.createElement('div');

        // Mensaje mandado
        m.setAttribute('class', '_2hqOq /*_28DtS*/ message-out mensaje expuesto');

        // Mensaje recibido
        //m.setAttribute('class', '_2hqOq /*_28DtS*/ message-in mensaje expuesto');
        
        // Mensaje con check azul
        m.innerHTML = '<span></span><div class="_2et95 _3c94e _1dvTE"><span data-testid="tail" data-icon="tail" class="_2-dPL"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 13" width="8" height="13"><path fill="currentColor" d="M1.533 2.568L8 11.193V0H2.812C1.042 0 .474 1.156 1.533 2.568z" class="cola"></path></svg></span><div class="_3sKvP wQZ0F"><div class="_274yw"><div class="zGvn8 color-2 _23x7I" role="" hide-name="true"><span dir="auto" class="FMlAw FdF4z _3Whw5">Nombre</span></div><div class="_11PeL copyable-text" data-pre-plain-text="[11:01 a.&nbsp;m., 4/9/2020] Angelo: "><div class="eRacY" dir="ltr"><span dir="ltr" class="_3Whw5 selectable-text invisible-space copyable-text"><span>Understandable</span></span><span class="_2oWZe _2HWXK"></span></div></div><div class="_2frDn"><div class="VGBA3"><span class="_18lLQ" dir="auto">11:01 a.&nbsp;m.</span><div class="_1qPwk"><span data-testid="msg-dblcheck" aria-label=" Leído " data-icon="msg-dblcheck" class="_3xkAl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span></div></div></div></div><span></span></div></div>';

        /* Iconos de estado de mensaje restantes */
        
        // Doble Check Azul
        //'<span data-testid="msg-dblcheck" aria-label=" Leído " data-icon="msg-dblcheck" class="_3xkAl"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span>'

        //Doble Check
        //'<span data-testid="msg-dblcheck" aria-label=" Entregado " data-icon="msg-dblcheck" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span>'
                
        // 1 solo Check
        //'<span data-testid="msg-check" aria-label=" Enviado " data-icon="msg-check" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span>'

        // No Enviado (Reloj)
        //'<span data-testid="msg-time" aria-label=" Pendiente " data-icon="msg-time" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M9.75 7.713H8.244V5.359a.5.5 0 0 0-.5-.5H7.65a.5.5 0 0 0-.5.5v2.947a.5.5 0 0 0 .5.5h.094l.003-.001.003.002h2a.5.5 0 0 0 .5-.5v-.094a.5.5 0 0 0-.5-.5zm0-5.263h-3.5c-1.82 0-3.3 1.48-3.3 3.3v3.5c0 1.82 1.48 3.3 3.3 3.3h3.5c1.82 0 3.3-1.48 3.3-3.3v-3.5c0-1.82-1.48-3.3-3.3-3.3zm2 6.8a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5z"></path></svg></span>'


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

            } else if(event.key == "Enter") {return event.returnValue = false;} // event.preventDefault()
        };

    // Mandar mensaje al presionar 'Enter' en la entrada de texto
    footerInput.addEventListener("keyup", function(event) {
        if(event.shiftKey) { // Si se presiona 'Shift'

            // No mandar mensaje

        } else if(footerValue != "" && event.key == "Enter") { // Si hay un texto introducido y se presiona 'Enter', ejecuta la functión
                    nuevoMensaje();
                    footerInput.innerText = ""; // Vaciar entrada al presionar 'Enter'
                    footerInput.focus(); // Selecciona de nuevo la entrada de texto para poder escribir otra vez al haber pulsado 'Enter'
               }
    
    // Mandar mensaje haciendo 'click' en el botón de enviar
    var footerPH = document.getElementsByClassName("_2FbwG")[chat_index + 1]; // El placeholder del buscador de la lista de chats tambien tiene esta clase por eso el +1 para saltarlo
    var footerButton = document.getElementsByClassName("footer-button")[chat_index];
    footerButton.onclick = function() {
        if(footerValue != "") { // Si hay un texto introducido y se hace 'click', ejecuta la functión
              nuevoMensaje();
              footerInput.innerText = ""; // Vaciar entrada al hacer 'click' en el botón
              footerPH.style.display = ""; // Mostrar 'placeholder'
              var audioButtton = '<div class="_3TDpK"><span><button class="_2r1fJ"><span data-testid="ptt" data-icon="ptt" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg></span></button></span></div>';
              footerButton.innerHTML = audioButtton; // Cambiar botón del 'footer' al de grabar mensaje
        }
    }

         // Ocultar placeholder cuando haya texto en el footer y cambiar el icono del botón
         footerValue = footerInput.innerHTML;
         if(footerValue != "") {
            footerPH.style.display = "none"; // Ocultar 'placeholder'
            var sendButton = '<button class="_1U1xa"><span data-testid="send" data-icon="send" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg></span></button>';
            footerButton.innerHTML = sendButton; // Cambiar botón del 'footer' al de enviar mensaje
         } else {
             footerPH.style.display = ""; // Mostrar 'placeholder'
             var audioButtton = '<div class="_3TDpK"><span><button class="_2r1fJ"><span data-testid="ptt" data-icon="ptt" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg></span></button></span></div>';
             footerButton.innerHTML = audioButtton; // Cambiar botón del 'footer' al de grabar mensaje
             }

    });
    
    lista_chats.oncontextmenu = function() {return false}
    chatP[chat_index].oncontextmenu = function() {return false}
    chatP[chat_index].addEventListener("contextmenu", PopupOptions);
    footer.oncontextmenu = function() {return true}
    footer.addEventListener("contextmenu", DeletePopupOptions);
}
