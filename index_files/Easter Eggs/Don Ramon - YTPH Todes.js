// Mostrar clip de Don Ramon del YTPH "[YTPH] TODES #1 - LAS FEMINISTAS SE ODIAN ENTRE SI" tiempo = 2:01

function myDonRamon() {
 if(buscador.innerText == "todes" || buscador.innerText == "TODES" || buscador.innerText == "Todes") {
    easter_egg.src = "index_files/Easter Eggs/Don Ramon - YTPH Todes.mp4";
    StartEasterEgg(); 
    EndEasterEgg();
 }
}

buscador.addEventListener("keyup", myDonRamon);
