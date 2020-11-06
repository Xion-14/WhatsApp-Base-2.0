// Colocar atributo para no poder agarrar imagenes
var imagenes = document.getElementsByTagName("img");

function IMGDraggableFalse() {
var i = 0;
	for(i = 0;i < imagenes.length-1;i++) {
	imagenes[i].setAttribute("draggable","false");
	}
}

IMGDraggableFalse();

// Eliminar atributo
function IMGDraggableFalseRemove() {
	var i = 0;
		for(i = 0;i < imagenes.length-1;i++) {
		imagenes[i].removeAttribute("draggable");
		}
	}