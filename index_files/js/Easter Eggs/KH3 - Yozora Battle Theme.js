// Reproducir Tema de Yozora de Batalla

function myYozora() {

 if(buscador.innerText == "Yozora" || buscador.innerText == "YOZORA" || buscador.innerText == "yozora") {
    music.src = "index_files/Easter Eggs/KH3 - Yozora Battle Theme.mp3";
    music.play();
 }
}


buscador.addEventListener("keyup", myYozora);