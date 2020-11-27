// Mostrar clip de Don Ramon del YTPH "[YTPH] TODES #1 - LAS FEMINISTAS SE ODIAN ENTRE SI" tiempo = 2:01

function myDonRamon() {
 if(buscador.innerText == ("todes" || "TODES" || "Todes")) {
    easter_egg.src = "index_files/js/Easter Eggs/Don Ramon - YTPH Todes.mp4";
    StartEasterEgg();
    EndEasterEgg();
 }
}

buscador.addEventListener("keyup", myDonRamon);
