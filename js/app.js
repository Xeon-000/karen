document.addEventListener("DOMContentLoaded", () => {

    const backgroundMusic =
        document.getElementById("background-music");

    if (!backgroundMusic) {
        console.error("No se encontró la música.");
        return;
    }

    /*
     * Volumen
     */
    backgroundMusic.volume = 0.7;


    /*
     * Intentar reproducir inmediatamente
     * cuando se carga la página.
     */
    const startMusic = () => {

        backgroundMusic
            .play()
            .then(() => {

                console.log(
                    "🎵 Música iniciada automáticamente."
                );

            })
            .catch((error) => {

                console.log(
                    "El navegador bloqueó el autoplay:",
                    error
                );

            });

    };


    /*
     * INTENTO PRINCIPAL
     *
     * Se ejecuta inmediatamente al cargar
     * la primera pantalla.
     */
    startMusic();


    /*
     * Segundo intento por si el navegador
     * tarda en cargar completamente el audio.
     */
    window.addEventListener("load", () => {

        if (backgroundMusic.paused) {
            startMusic();
        }

    });


    /*
     * Si el navegador permite reproducir después
     * de alguna interacción, aprovechamos cualquier
     * toque en la página.
     */
    document.addEventListener(
        "click",
        () => {

            if (backgroundMusic.paused) {
                startMusic();
            }

        },
        { once: false }
    );


    console.log(
        "❤️ Declaración cargada correctamente."
    );

});
