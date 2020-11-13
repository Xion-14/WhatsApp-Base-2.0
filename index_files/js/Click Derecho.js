// Habilitar/Deshabilitar el menu por defecto del click

var cd = 0;
function ClickDerechoOnOff() {

	if(cd===0) {
	window.oncontextmenu = function(){ return true }
	cd=1;
	} else if(cd===1) {
		window.oncontextmenu = function(){ return false }
		cd=0;
		}		
}

//window.oncontextmenu = function(){ return false; }