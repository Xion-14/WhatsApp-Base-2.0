// Mostrar ventana emergente para tomar una decisión

// Coordenadas ratón

var x;
var y;

function MouseCoords(event) {
     x = event.clientX;
     y = event.clientY;
}

Chat.addEventListener("mousemove", MouseCoords);

var popup_1 = '<div id="popup_1" class="_2fpYo" tabindex="-1"><span class="_2ueSF"><div tabindex="-1"><div data-animate-modal-backdrop="true" class="overlay _3ZqlX _1LkpH copyable-area"><div class="_2Oo_9"><div class="G_MLO" data-animate-modal-popup="true"><div class="_2HE5l" data-animate-modal-body="true"><div class="_3pTi5">¿Quieres eliminar este mensaje?</div><div class="_9a59P"><div class="BDFA1"><div class="_22Sil"><div class="_2XWkx"><div class="_1177f _2SH44"><div class="_1PsNu _3SQxx"></div></div><div class="_1177f"><div class="_1PsNu _2w5bx"></div></div></div></div><div class="_6sJEG">Eliminar archivo de tu teléfono</div></div></div><div class="_9a59P"></div><div class="_2LPYs"><div class="_1uIbi"><div class="_416C4"><div class="S7_rT _1hQZ_" role="button">Eliminar para mí</div></div><div class="_416C4"><div class="S7_rT _1hQZ_" role="button">Cancelar</div></div><div class="_416C4"><div class="S7_rT _1hQZ_" role="button">Eliminar para todos</div></div></div></div></div></div></div></div></div></span></div>';
var popup_2 = '<div id="popup_2" class="_2fpYo" tabindex="-1"><span class="_2ueSF"><div tabindex="-1"><div data-animate-modal-backdrop="true" class="overlay _3ZqlX _1LkpH copyable-area"><div class="_2Oo_9"><div class="G_MLO" data-animate-modal-popup="true"><div class="_2HE5l" data-animate-modal-body="true"><div class="_3pTi5">¿Quieres eliminar este mensaje?</div><div class="_9a59P"><div class="BDFA1"><div class="_22Sil"><div class="_2XWkx"><div class="_1177f _2SH44"><div class="_1PsNu _3SQxx"></div></div><div class="_1177f"><div class="_1PsNu _2w5bx"></div></div></div></div><div class="_6sJEG">Eliminar archivo de tu teléfono</div></div></div><div class="_9a59P"></div><div class="_2LPYs"><div class="S7_rT _1hQZ_" role="button">Cancelar</div><div class="S7_rT FV2Qy" role="button">Eliminar para mí</div></div></div></div></div></div></div></span></div>';
var popup_button = document.getElementsByClassName("S7_rT");
var popup_options = '<div tabindex="-1" class="_2s_eZ" style="transform-origin: right top; transform: scale(1); opacity: 1; transition: 0.5s; transiton-property: transform opacity;"><ul class="I4jbF"><li tabindex="-1" class="_1N-3y eP_pD _36Osw" data-animate-dropdown-item="true" style="opacity: 1;"><div class="Ut_N0 n-CQr _2vuxN" role="button" title="Info. del mensaje">Info. del mensaje</div></li><li tabindex="-1" class="_1N-3y eP_pD _36Osw" data-animate-dropdown-item="true" style="opacity: 1;"><div class="Ut_N0 n-CQr _2vuxN" role="button" title="Responder">Responder</div></li><li tabindex="-1" class="_1N-3y eP_pD _36Osw" data-animate-dropdown-item="true" style="opacity: 1;"><div class="Ut_N0 n-CQr _2vuxN" role="button" title="Reenviar mensaje">Reenviar mensaje</div></li><li tabindex="-1" class="_1N-3y eP_pD _36Osw" data-animate-dropdown-item="true" style="opacity: 1;"><div class="Ut_N0 n-CQr _2vuxN" role="button" title="Destacar mensaje">Destacar mensaje</div></li><li tabindex="-1" class="_1N-3y eP_pD _36Osw" data-animate-dropdown-item="true" style="opacity: 1;"><div class="Ut_N0 n-CQr _2vuxN" role="button" title="Eliminar mensaje">Eliminar mensaje</div></li></ul></div>';
var popup_options_button = '<div class="_4tndQ _1vTsI _1ohds" style="opacity: 1;"><div data-js-context-icon="true" class="huqNi" style="transform: translateX(0%);"><span data-testid="down-context" data-icon="down-context" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" width="18" height="18"><path fill="currentColor" d="M3.3 4.6L9 10.3l5.7-5.7 1.6 1.6L9 13.4 1.7 6.2l1.6-1.6z"></path></svg></span></div></div>';
var popup_left_bottom = '<div class="izoh-" style=""><div class="_11dpe"><span>Chat archivado</span><button class="QTDNn">Deshacer</button><button class="_2bw0l"><span data-testid="x-alt" data-icon="x-alt" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M17.25 7.8L16.2 6.75l-4.2 4.2-4.2-4.2L6.75 7.8l4.2 4.2-4.2 4.2 1.05 1.05 4.2-4.2 4.2 4.2 1.05-1.05-4.2-4.2 4.2-4.2z"></path></svg></span></button></div></div>';
var popup_stories = '<div class="_2fpYo" tabindex="-1"><span class="_2ueSF"><div class="_3_ZWX" data-animate-status-v3-modal-background="true"><div class="_2x-Yl"><div class="_2T-91"><div class="_20L9v"><div class="_3Opax"><div class="_1BjNO _3lLJT" style="height: 40px; width: 40px;"><img src="https://web.whatsapp.com/pp?e=https%3A%2F%2Fpps.whatsapp.net%2Fv%2Ft61.24694-24%2F117884652_1500396153500866_2356624640937481720_n.jpg%3Foh%3Dd2f8c15e7742d4b3893966bd0bea3111%26oe%3D5F8AC08D&amp;t=s&amp;u=34642791803%40c.us&amp;i=1598463621&amp;n=oCtCPDsECzlLbVGPcP5uqqZOUW2%2FkIpjO1ldoL7E6SA%3D" draggable="false" class="_2goTk _1Jdop _3Whw5" style="visibility: visible;"><div class="_1V82l"><span data-testid="default-user" data-icon="default-user" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 212 212" width="212" height="212"><path fill="#DFE5E7" class="background" d="M106.251.5C164.653.5 212 47.846 212 106.25S164.653 212 106.25 212C47.846 212 .5 164.654.5 106.25S47.846.5 106.251.5z"></path><path fill="#FFF" class="primary" d="M173.561 171.615a62.767 62.767 0 0 0-2.065-2.955 67.7 67.7 0 0 0-2.608-3.299 70.112 70.112 0 0 0-3.184-3.527 71.097 71.097 0 0 0-5.924-5.47 72.458 72.458 0 0 0-10.204-7.026 75.2 75.2 0 0 0-5.98-3.055c-.062-.028-.118-.059-.18-.087-9.792-4.44-22.106-7.529-37.416-7.529s-27.624 3.089-37.416 7.529c-.338.153-.653.318-.985.474a75.37 75.37 0 0 0-6.229 3.298 72.589 72.589 0 0 0-9.15 6.395 71.243 71.243 0 0 0-5.924 5.47 70.064 70.064 0 0 0-3.184 3.527 67.142 67.142 0 0 0-2.609 3.299 63.292 63.292 0 0 0-2.065 2.955 56.33 56.33 0 0 0-1.447 2.324c-.033.056-.073.119-.104.174a47.92 47.92 0 0 0-1.07 1.926c-.559 1.068-.818 1.678-.818 1.678v.398c18.285 17.927 43.322 28.985 70.945 28.985 27.678 0 52.761-11.103 71.055-29.095v-.289s-.619-1.45-1.992-3.778a58.346 58.346 0 0 0-1.446-2.322zM106.002 125.5c2.645 0 5.212-.253 7.68-.737a38.272 38.272 0 0 0 3.624-.896 37.124 37.124 0 0 0 5.12-1.958 36.307 36.307 0 0 0 6.15-3.67 35.923 35.923 0 0 0 9.489-10.48 36.558 36.558 0 0 0 2.422-4.84 37.051 37.051 0 0 0 1.716-5.25c.299-1.208.542-2.443.725-3.701.275-1.887.417-3.827.417-5.811s-.142-3.925-.417-5.811a38.734 38.734 0 0 0-1.215-5.494 36.68 36.68 0 0 0-3.648-8.298 35.923 35.923 0 0 0-9.489-10.48 36.347 36.347 0 0 0-6.15-3.67 37.124 37.124 0 0 0-5.12-1.958 37.67 37.67 0 0 0-3.624-.896 39.875 39.875 0 0 0-7.68-.737c-21.162 0-37.345 16.183-37.345 37.345 0 21.159 16.183 37.342 37.345 37.342z"></path></svg></span></div></div></div><div class="_5ZC7y"><span class="_2jlSa">Mi estado</span><span class="_10ykw">No hay actualizaciones</span></div><div class="dhDW9"></div></div><div class="_1qDvT _147Si"><div class="_1_u2h"></div><div class="_2NIgT"></div></div></div><div class="_1srPs"><div class="nGdUb"><div class="b7uar"><span data-testid="status-v3-placeholder" data-icon="status-v3-placeholder" class=""><svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80" width="80" height="80"><path fill="currentColor" d="M30.566 78.982c-.222 0-.447-.028-.672-.087C12.587 74.324.5 58.588.5 40.631c0-3.509.459-6.989 1.363-10.343a2.625 2.625 0 0 1 5.068 1.366 34.505 34.505 0 0 0-1.182 8.977c0 15.578 10.48 29.226 25.485 33.188a2.625 2.625 0 0 1-.668 5.163zm19.355-.107C67.336 74.364 79.5 58.611 79.5 40.563c0-3.477-.452-6.933-1.345-10.27a2.624 2.624 0 1 0-5.071 1.356 34.578 34.578 0 0 1 1.166 8.914c0 15.655-10.545 29.319-25.646 33.23a2.625 2.625 0 0 0 1.317 5.082zM15.482 16.5C21.968 9.901 30.628 6.267 39.867 6.267c9.143 0 17.738 3.569 24.202 10.05a2.625 2.625 0 0 0 3.717-3.708C60.329 5.135 50.413 1.018 39.867 1.018c-10.658 0-20.648 4.191-28.128 11.802a2.624 2.624 0 1 0 3.743 3.68z"></path></svg></span></div><div class="_2-s0u">Haz clic en un contacto para ver sus actualizaciones de estado</div></div></div><button class="_19n1B"><span data-testid="x-viewer" data-icon="x-viewer" class=""><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="currentColor" d="M19.8 5.8l-1.6-1.6-6.2 6.2-6.2-6.2-1.6 1.6 6.2 6.2-6.2 6.2 1.6 1.6 6.2-6.2 6.2 6.2 1.6-1.6-6.2-6.2 6.2-6.2z"></path></svg></span></button></div></div></span></div>';

var index_mensaje = -1;
var hover_options_menu = document.getElementsByClassName("I4jbF")[0];
var index_options_menu = -1;
var hover_options = -1;

// Nombre de los mensajes de chats grupales (Sin uso)
var nombre_mensaje = document.getElementsByClassName("zGvn8");

var span_popup = app.children[0].children;


function AddPopup1() {
    span_popup[1].innerHTML = popup_1;
    // Desaparece el popup al hacer click fuera del mismo
    var i = 0;
    for(i=0;i<=popup_button.length;i++) {
    popup_button[i].addEventListener("click", DeletePopup);
    }
}

function AddPopup2() {
    span_popup[1].innerHTML = popup_2;
    // Desaparece el popup al hacer click fuera del mismo
    var i = 0;
    for(i=0;i<=popup_button.length-1;i++) {
    popup_button[i].addEventListener("click", DeletePopup);
    }
}

function DeletePopup() {
    var popup_box = document.getElementsByClassName("G_MLO")[0];
    var popup_box_bg = document.getElementsByClassName("overlay")[0];
    popup_box.classList.add("closed");
    popup_box_bg.classList.add("closed");
    setTimeout(function() {span_popup.innerHTML = "";}, 600);
}

function OnmouseCheck(index_options_menu) {
    var i = 0;
    for(i=0;i<=hover_options_menu.children.length-1;i++) {
     if(hover_options_menu.children[i] === hover_options_menu.children[index_options_menu]) {
        hover_options_menu.children[i].classList.add("_39Nmx");
    } else {hover_options_menu.addEventListener("mouseout", function() {
            for(i=0;i<=hover_options_menu.children.length-1;i++) {
                hover_options_menu.children[i].classList.remove("_39Nmx");
            }} );}
    }
}
// Continuar en otro momento
function PopupOptionsButton() {
    var i = 0;
    for(i=0;i<=mensajes_chat.length-1;i++) {
        if(mensajes_chat[i].children[1] === undefined) {continue} else
        if(mensajes_chat[i].children[1].classList[1] === "" /*&& i === index_mensaje*/) {
           mensajes_chat[i].children[1].children[1].innerHTML = popup_options_button;

        } else if(mensajes_chat[i].children[1].children[1] === undefined) {continue} else
               if(mensajes_chat[i].children[1].classList[1] === "_3c94e" || "_3EjY8" /*&& i === index_mensaje*/) {
                  mensajes_chat[i].children[1].children[1].children[1].innerHTML = popup_options_button;

                } else if(mensajes_chat[i].children[1].children[0] === undefined || mensajes_chat[i].children[1].children[0].children[1] === undefined) {continue} else
                       if(mensajes_chat[i].children[1].classList[1] === "_302_B" /*&& i === index_mensaje*/) {
                          mensajes_chat[i].children[1].children[0].children[1].innerHTML = popup_options_button;

                        }
    }
}

function PopupOptions() {
    document.body.addEventListener("mouseover", OnmouseCheck);
    span_popup[3].innerHTML = popup_options;
    span_popup[3].children[0].style.top = y + "px";
    span_popup[3].children[0].style.left = x + -span_popup[3].children[0].offsetWidth + "px";
    hover_options_menu = document.getElementsByClassName("I4jbF")[0];
    var i = 0;
    for(i=0;i<=hover_options_menu.children.length-1;i++) {
        hover_options_menu.children[i].setAttribute("onmouseover", "OnmouseCheck("+i+")");
    }
}

function PopupLeftBottom() {
    span_popup[0].innerHTML = popup_left_bottom;
}

function DeletePopupLeftBottom() {
    span_popup[0].children[0].classList.add("closed");
    setTimeout(function() {span_popup[0].innerHTML = "";}, 300);
}

function DeletePopupOptions() {
    span_popup[3].children[0].style.transform = "scale(0)";
    span_popup[3].children[0].style.opacity =  "0";
    var i = 0;
    for(i=0;i<=hover_options_menu.children.length-1;i++) {
        hover_options_menu.children[i].classList.remove("_39Nmx");
    }
    setTimeout(function() {span_popup_options.innerHTML = "";}, 1000);
}

document.body.addEventListener("click", DeletePopupOptions);