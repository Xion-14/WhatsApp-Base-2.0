var footer = document.getElementsByTagName('footer')[0];
var footerInput = footer.children[0].children[1].children[0].children[1];
var footerPH = document.getElementsByClassName("inputPH")[0];

var footerButton = document.getElementsByClassName("footer-button")[0];

function MandarMensaje() { // Al ejecutar la función se situa en la "entrada de texto" del chat actual para habilitarlo, mandar mensajes se hace con la función "nuevoMensaje"
    
    if(chat_index >= 0) {
        footer = document.getElementsByTagName('footer')[chat_index];
        footerInput = footer.children[0].children[1];
    }

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
        //'<span data-testid="msg-dblcheck" aria-label=" Leído " data-icon="msg-dblcheck" class="_3xkAl" role="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span>'

        //Doble Check
        //'<span data-testid="msg-dblcheck" aria-label=" Entregado " data-icon="msg-dblcheck" class="" role="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span>'

        // 1 solo Check
        //'<span data-testid="msg-check" aria-label=" Enviado " data-icon="msg-check" class="" role="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M10.91 3.316l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z"></path></svg></span>'

        // No Enviado (Reloj)
        //'<span data-testid="msg-time" aria-label=" Pendiente " data-icon="msg-time" class="" role="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15"><path fill="currentColor" d="M9.75 7.713H8.244V5.359a.5.5 0 0 0-.5-.5H7.65a.5.5 0 0 0-.5.5v2.947a.5.5 0 0 0 .5.5h.094l.003-.001.003.002h2a.5.5 0 0 0 .5-.5v-.094a.5.5 0 0 0-.5-.5zm0-5.263h-3.5c-1.82 0-3.3 1.48-3.3 3.3v3.5c0 1.82 1.48 3.3 3.3 3.3h3.5c1.82 0 3.3-1.48 3.3-3.3v-3.5c0-1.82-1.48-3.3-3.3-3.3zm2 6.8a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-3.5a2 2 0 0 1 2-2h3.5a2 2 0 0 1 2 2v3.5z"></path></svg></span>'


        // Texto mensaje
        m.children[1].children[1].children[0].children[1].children[0].children[0].children[0].
        innerHTML = footerInput.children[0].children[1].innerHTML;
        if(edit == 1) { // Controlar el mandar mensajes con el Modo Edición (ir a EditionMode.js)
            chatContent.appendChild(m);
            location.href = '#bottom';
        }

    }

    // Evitar salto de linea con Enter
    onkeydown = function(event) {
          if(event.shiftKey) { // Si se presiona 'Shift'

              // Hacer salto de linea

          } else if(event.key == "Enter") {return event.returnValue = false;} // event.preventDefault()
    }

    // Mandar mensaje al presionar 'Enter' en la entrada de texto
    footerInput.addEventListener("keyup", function(event) {

        if(event.shiftKey) { // Si se presiona 'Shift'

            // No mandar mensaje

        } else if(footerInput.children[0].children[1].innerHTML != "" && event.key == "Enter") { // Si hay un texto introducido y se presiona 'Enter', ejecuta la functión
                    nuevoMensaje();
                    footerInput.children[0].children[1].innerHTML = ""; // Vaciar entrada al presionar 'Enter'
                    footerInput.children[0].children[1].focus(); // Selecciona de nuevo la entrada de texto para poder escribir otra vez al haber pulsado 'Enter'
        }

        // Mandar mensaje haciendo 'click' en el botón de enviar
        footerButton.onclick = function() {
            if(footerInput.children[0].children[1].innerHTML != "") { // Si hay un texto introducido y se hace 'click', ejecuta la functión
                  nuevoMensaje();
                  footerInput.children[0].children[1].innerHTML = ""; // Vaciar entrada al hacer 'click' en el botón
                  var audioButtton = '<div class="_3TDpK"><span><button class="_2r1fJ"><span data-testid="ptt" data-icon="ptt" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg></span></button></span></div>';
                  footerButton.innerHTML = audioButtton; // Cambiar botón del 'footer' al de grabar mensaje
            }
        }


        // Ocultar placeholder cuando haya texto en el footer y cambiar el icono del botón
        if(footerInput.children[0].children[1].innerHTML != "") {
            footerPH.style.visibility = "hidden"; // Ocultar 'placeholder'
            var sendButton = '<button class="_1U1xa"><span data-testid="send" data-icon="send" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M1.101 21.757L23.8 12.028 1.101 2.3l.011 7.912 13.623 1.816-13.623 1.817-.011 7.912z"></path></svg></span></button>';
            footerButton.innerHTML = sendButton; // Cambiar botón del 'footer' al de enviar mensaje
        } else {
            footerPH.style.visibility = "visible" // Mostrar 'placeholder'
            var audioButtton = '<div class="_3TDpK"><span><button class="_2r1fJ"><span data-testid="ptt" data-icon="ptt" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z"></path></svg></span></button></span></div>';
            footerButton.innerHTML = audioButtton; // Cambiar botón del 'footer' al de grabar mensaje
        }

    });

    // Popup Contextmenu
    if(edit == 1) { // Controlar edición del 'PopupOptions' con el Modo Edición (ir a EditionMode.js)

        chatContent.parentElement.parentElement.parentElement.oncontextmenu = function() {return false} // Deshabilitar click derecho en el chat actual
        chatContent.parentElement.parentElement.parentElement.removeEventListener("contextmenu", PopupOptions); // Deshabilitar menu popup del click derecho en el chat actual

        setTimeout(function() {
            chatContent.parentElement.parentElement.parentElement.addEventListener("contextmenu", PopupOptions); // Habilitar menu popup del click derecho en el chat actual

        }, 500); // Retardo necesario para evitar bugs

        chatListContainer.addEventListener("contextmenu", PopupOptions2); // Habilitar menu popup del click derecho en el chat actual
        //panelLateral.removeEventListener("contextmenu", PopupOptions2); // Deshabilitar menu popup del click derecho en el chat actual
        footer.oncontextmenu = function() {return true}
        footer.addEventListener("contextmenu", DeletePopupOptions);
    } else {
        
        chatContent.parentElement.parentElement.parentElement.oncontextmenu = function() {return false} // Deshabilitar click derecho en el chat actual
        chatContent.parentElement.parentElement.parentElement.removeEventListener("contextmenu", PopupOptions); // Deshabilitar menu popup del click derecho en el chat actual

        chatListContainer.removeEventListener("contextmenu", PopupOptions2); // Deshabilitar menu popup del click derecho en el chat actual
    
    }

}

MandarMensaje();

// Botón clip del footer del chat actual
var footerClip = document.getElementsByClassName("_295He")[0];
// Menu desplegable del botón clip
var clipMenu = '<div class="_8EvFT"><span data-testid="attach-shadow" data-icon="attach-shadow" class=""><svg xmlns="http://www.w3.org/2000/svg"><defs><filter id="attach-shadow" x="0" y="0" width="200%" height="200%"><feOffset result="offOut" in="SourceAlpha" dy="2"></feOffset><feGaussianBlur result="blurOut" in="offOut" stdDeviation=".5"></feGaussianBlur><feComponentTransfer in="blurOut" result="alphaOut"><feFuncA type="linear" slope=".08"></feFuncA></feComponentTransfer><feBlend in="SourceGraphic" in2="alphaOut"></feBlend></filter></defs></svg></span><div tabindex="-1" class="_15QUU" style="transform-origin: left top;"><ul class="I4jbF"><li tabindex="-1" class="_1N-3y eP_pD _YNsg" data-animate-dropdown-item="true"><button class="_1dxx-" data-animate-menu-icons-item="true" style="opacity: 1; transform: translateY(0%) scaleX(1) scaleY(1);"><span data-testid="attach-image" data-icon="attach-image" class="_1kjc_"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 53" width="53" height="53"><defs><circle id="image-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle></defs><clipPath id="image-SVGID_2_"><use xlink:href="#image-SVGID_1_" overflow="visible"></use></clipPath><g clip-path="url(#image-SVGID_2_)"><path fill="#AC44CF" d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"></path><path fill="#BF59CF" d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"></path><path fill="#AC44CF" d="M17 24.5h18v9H17z"></path></g><g fill="#F5F5F5"><path id="svg-image" d="M18.318 18.25h16.364c.863 0 1.727.827 1.811 1.696l.007.137v12.834c0 .871-.82 1.741-1.682 1.826l-.136.007H18.318a1.83 1.83 0 0 1-1.812-1.684l-.006-.149V20.083c0-.87.82-1.741 1.682-1.826l.136-.007h16.364zm5.081 8.22l-3.781 5.044c-.269.355-.052.736.39.736h12.955c.442-.011.701-.402.421-.758l-2.682-3.449a.54.54 0 0 0-.841-.011l-2.262 2.727-3.339-4.3a.54.54 0 0 0-.861.011zm8.351-5.22a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501z"></path></g></svg></span><input accept="image/*,video/mp4,video/3gpp,video/quicktime" type="file" multiple="" style="display: none;"></button></li><li tabindex="-1" class="_1N-3y eP_pD _YNsg" data-animate-dropdown-item="true"><button class="_1dxx-" data-animate-menu-icons-item="true" style="opacity: 1; transform: translateY(0%) scaleX(1) scaleY(1);"><span data-testid="attach-camera" data-icon="attach-camera" class="_1kjc_"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 53" width="53" height="53"><defs><circle id="camera-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle></defs><clipPath id="camera-SVGID_2_"><use xlink:href="#camera-SVGID_1_" overflow="visible"></use></clipPath><g clip-path="url(#camera-SVGID_2_)"><path fill="#D3396D" d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"></path><path fill="#EC407A" d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"></path><path fill="#D3396D" d="M17 24.5h15v9H17z"></path></g><g fill="#F5F5F5"><path id="svg-camera" d="M27.795 17a3 3 0 0 1 2.405 1.206l.3.403a3 3 0 0 0 2.405 1.206H34.2a2.8 2.8 0 0 1 2.8 2.8V32a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4v-9.385a2.8 2.8 0 0 1 2.8-2.8h1.295a3 3 0 0 0 2.405-1.206l.3-.403A3 3 0 0 1 25.205 17h2.59zM26.5 22.25a5.25 5.25 0 1 0 .001 10.501A5.25 5.25 0 0 0 26.5 22.25zm0 1.75a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"></path></g></svg></span></button></li><li tabindex="-1" class="_1N-3y eP_pD _YNsg" data-animate-dropdown-item="true"><button class="_1dxx-" data-animate-menu-icons-item="true" style="opacity: 1; transform: translateY(0%) scaleX(1) scaleY(1);"><span data-testid="attach-document" data-icon="attach-document" class="_1kjc_"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 53" width="53" height="53"><defs><circle id="document-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle></defs><clipPath id="document-SVGID_2_"><use xlink:href="#document-SVGID_1_" overflow="visible"></use></clipPath><g clip-path="url(#document-SVGID_2_)"><path fill="#5157AE" d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"></path><path fill="#5F66CD" d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"></path></g><g fill="#F5F5F5"><path id="svg-document" d="M29.09 17.09c-.38-.38-.89-.59-1.42-.59H20.5c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H32.5c1.1 0 2-.9 2-2V23.33c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM27.5 22.5V18l5.5 5.5h-4.5c-.55 0-1-.45-1-1z"></path></g></svg></span><input accept="*" type="file" multiple="" style="display: none;"></button></li><li tabindex="-1" class="_1N-3y eP_pD _YNsg" data-animate-dropdown-item="true"><button class="_1dxx-" data-animate-menu-icons-item="true" style="opacity: 1; transform: translateY(0%) scaleX(1) scaleY(1);"><span data-testid="attach-contact" data-icon="attach-contact" class="_1kjc_"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 53" width="53" height="53"><defs><circle id="contact-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle></defs><clipPath id="contact-SVGID_2_"><use xlink:href="#contact-SVGID_1_" overflow="visible"></use></clipPath><g clip-path="url(#contact-SVGID_2_)"><path fill="#0795DC" d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"></path><path fill="#0EABF4" d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"></path></g><g fill="#F5F5F5"><path id="svg-contact" d="M26.5 26.5A4.5 4.5 0 0 0 31 22a4.5 4.5 0 0 0-4.5-4.5A4.5 4.5 0 0 0 22 22a4.5 4.5 0 0 0 4.5 4.5zm0 2.25c-3.004 0-9 1.508-9 4.5v1.125c0 .619.506 1.125 1.125 1.125h15.75c.619 0 1.125-.506 1.125-1.125V33.25c0-2.992-5.996-4.5-9-4.5z"></path></g></svg></span></button></li><li tabindex="-1" class="_1N-3y eP_pD _YNsg" data-animate-dropdown-item="true"><button class="_1dxx-" data-animate-menu-icons-item="true" style="opacity: 1; transform: translateY(0%) scaleX(1) scaleY(1);"><span data-testid="attach-rooms" data-icon="attach-rooms" class="_1kjc_"><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 53 53" width="53" height="53"><defs><circle id="rooms-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle></defs><clipPath id="rooms-SVGID_2_"><use xlink:href="#rooms-SVGID_1_" overflow="visible"></use></clipPath><g clip-path="url(#rooms-SVGID_2_)"><path fill="#396CD3" d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z"></path><path fill="#4079EC" d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z"></path><path fill="#396CD3" d="M17 24.5h15v9H17z"></path></g><g fill="#F5F5F5"><path id="svg-rooms" fill-rule="evenodd" clip-rule="evenodd" d="M28.5 18a3.5 3.5 0 0 1 3.5 3.5v10a3.5 3.5 0 0 1-3.5 3.5h-10a3.5 3.5 0 0 1-3.5-3.5v-10a3.5 3.5 0 0 1 3.5-3.5h10zm-7.925 6.782a.804.804 0 0 0-1.045-.073l-.708.698-.297.33-.134.177a4.075 4.075 0 0 0 .433 5.265 4.07 4.07 0 0 0 2.886 1.198c.976 0 1.952-.349 2.73-1.05l.784-.777.077-.091.063-.102.045-.105a.797.797 0 0 0-.189-.824.806.806 0 0 0-1.045-.073l-.704.694-.123.116-.147.119-.15.105a2.5 2.5 0 0 1-3.099-.337 2.492 2.492 0 0 1-.12-3.392l.748-.756.076-.091.063-.102.046-.105a.794.794 0 0 0-.19-.824zm5.281-.637a.803.803 0 0 0-1.044-.073l-3.67 3.662-.078.091-.063.102-.045.105a.793.793 0 0 0 .754 1.056.805.805 0 0 0 .481-.16l3.671-3.662.076-.09.064-.102.045-.105a.795.795 0 0 0-.191-.824zm2.323-2.323a4.078 4.078 0 0 0-5.615-.149l-.785.777-.073.084-.062.098a.806.806 0 0 0 .14.941.803.803 0 0 0 1.043.072l.705-.693.127-.119.137-.111a2.494 2.494 0 0 1 3.257.227c.921.923.972 2.413.117 3.392l-.746.755-.072.084-.062.098a.8.8 0 0 0 .139.941.8.8 0 0 0 1.043.072l.709-.697.148-.156.145-.17a4.084 4.084 0 0 0-.295-5.446zm9.815-.188l.006.129v9.474c0 1.31-1.714 1.998-2.744 1.12l-.878-.847a2.828 2.828 0 0 1-.871-1.849l-.007-.19v-5.943c0-.765.316-1.498.879-2.039l.877-.846c.996-.848 2.631-.234 2.738.991z"></path></g></svg></span></button></li></ul></div></div>';

function FooterClip() {
    if(edit == 1) {
        footerClip.children[0].children[1].innerHTML = "";
        footerClip.classList.remove("/*_4QpsN*/");
        footerClip.classList.add("_4QpsN");
    }
}
