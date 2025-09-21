// Cuando la página carga
onload = () => {
    document.body.classList.remove("container");
};

// Después de 6 segundos quitamos el título y arrancamos las letras
setTimeout(function() {
    var titulo = document.querySelector(".titulo");
    if (titulo) {
        titulo.style.display = "none";
    }

    // Inicia la sincronización de letras
    setInterval(updateLyrics, 1000);
}, 6000);

// Función para actualizar las letras (usa el array en anim.js)
function updateLyrics() {
    var audio = document.querySelector("audio");
    var lyrics = document.querySelector("#lyrics");

    if (!audio || !lyrics) return;

    var time = Math.floor(audio.currentTime);

    // Encontrar la línea actual de la letra
    for (let i = 0; i < lyricsData.length; i++) {
        const line = lyricsData[i];
        const nextLine = lyricsData[i + 1];

        let endTime;
        if (nextLine) {
            endTime = nextLine.time;
        } else {
            endTime = time + 10;
        }

        if (time >= line.time && time < endTime) {
            lyrics.innerHTML = line.text;
            break;
        }
    }
}
