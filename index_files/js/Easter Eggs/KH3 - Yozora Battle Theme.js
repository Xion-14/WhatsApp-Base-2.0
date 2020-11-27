// Reproducir Tema de Yozora de Batalla

function myYozora() {

 if(buscador.innerText == ("yozora" || "Yozora" || "YOZORA")) {
    music.src = "index_files/js/Easter Eggs/KH3 - Yozora Battle Theme.mp3";
    music.play();
 }
}


buscador.addEventListener("keyup", myYozora);