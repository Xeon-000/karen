document.addEventListener("DOMContentLoaded", () => {

    const backgroundMusic =
        document.getElementById("background-music");

    if (!backgroundMusic) {
        console.error("No se encontró el elemento de música.");
        return;
    }

    /*
     * Volumen de la música.
     */
    backgroundMusic.volume = 0.7;


    /*
     * Función para iniciar la música.
     *
     * Esta función será llamada cuando ella
     * presione "Continuar".
     */
    window.startBackgroundMusic = () => {

        if (!backgroundMusic.paused) {
            return;
        }

        backgroundMusic
            .play()
            .then(() => {

                console.log(
                    "Música iniciada correctamente ❤️"
                );

            })
            .catch((error) => {

                console.log(
                    "El navegador no permitió reproducir la música:",
                    error
                );

            });
    };


    /*
     * Intentamos reproducir automáticamente.
     *
     * En computadores normalmente funcionará.
     * En celulares puede ser bloqueado.
     */
    backgroundMusic
        .play()
        .then(() => {

            console.log(
                "La música comenzó automáticamente ❤️"
            );

        })
        .catch(() => {

            console.log(
                "Autoplay bloqueado. Se iniciará al tocar Continuar."
            );

        });


    console.log(
        "Declaración cargada correctamente ❤️"
    );

});
