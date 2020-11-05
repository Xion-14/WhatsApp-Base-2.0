// Mostrar video de DISMOTRON de "Gotta Go Fast" al escribir DISMOTRON en el buscador de chats

function myDISMOTRON() {
 if(buscador.innerText == "DISMOTRON") {
    easter_egg.src = "index_files/Easter Eggs/Dismotron Gotta Go Fast.mp4";
    StartEasterEgg();
    EndEasterEgg();
 }
}

buscador.addEventListener("keyup", myDISMOTRON);