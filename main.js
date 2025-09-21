// main.js
onload = () => {
    document.body.classList.remove("container");

    const titulo = document.querySelector(".titulo");
    const audio = document.querySelector("audio");

    // Mostrar el título unos segundos
    setTimeout(() => {
        titulo.classList.add("oculto");

        // Cuando termine la animación de desvanecimiento
        titulo.addEventListener("transitionend", () => {
            titulo.style.display = "none";

            // Reproducir la canción
            audio.play();

            // Iniciar la sincronización de las letras
            setInterval(updateLyrics, 500);
        }, { once: true });

    }, 3000); // El texto permanece 3 segundos antes de desvanecerse
};