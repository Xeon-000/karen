document.addEventListener(
    "DOMContentLoaded",
    () => {


        const backgroundMusic =
            document.getElementById(
                "background-music"
            );


        if (!backgroundMusic) {

            console.error(
                "No se encontró la música."
            );

            return;

        }



        /* =================================================
           CONFIGURACIÓN
           ================================================= */

        backgroundMusic.volume = 0.7;



        /* =================================================
           FUNCIÓN PARA INICIAR MÚSICA
           ================================================= */

        window.startBackgroundMusic =
            () => {


                /*
                 * Si ya está reproduciéndose,
                 * no hacemos nada.
                 */

                if (
                    !backgroundMusic.paused
                ) {

                    return;

                }


                backgroundMusic
                    .play()
                    .then(() => {

                        console.log(
                            "🎵 Música iniciada."
                        );

                    })
                    .catch((error) => {

                        console.log(
                            "El navegador bloqueó la música:",
                            error
                        );

                    });

            };



        /* =================================================
           INTENTO DE AUTOPLAY
           ================================================= */

        window.startBackgroundMusic();



        /* =================================================
           SEGUNDO INTENTO
           ================================================= */

        window.addEventListener(
            "load",
            () => {


                if (
                    backgroundMusic.paused
                ) {

                    window.startBackgroundMusic();

                }

            }
        );



        console.log(
            "❤️ Declaración cargada correctamente."
        );

    }
);
