/* =========================================================
   APLICACIÓN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const backgroundMusic =
            document.getElementById("background-music");


        /* -------------------------------------------------
           CONFIGURACIÓN DE LA MÚSICA
           ------------------------------------------------- */

        backgroundMusic.volume = 0.7;


        /* -------------------------------------------------
           INTENTAR REPRODUCIR AUTOMÁTICAMENTE
           ------------------------------------------------- */

        const playMusic =
            backgroundMusic.play();


        if (playMusic !== undefined) {

            playMusic
                .then(() => {

                    console.log(
                        "La música comenzó automáticamente ❤️"
                    );

                })
                .catch(() => {

                    console.log(
                        "El navegador bloqueó el autoplay."
                    );

                });

        }


        /* -------------------------------------------------
           RESPALDO PARA CELULARES
           -------------------------------------------------
           
           Si Chrome/Safari bloqueó el autoplay,
           el primer toque de ella iniciará la canción.
           ------------------------------------------------- */

        const startMusicOnInteraction = () => {

            backgroundMusic
                .play()
                .then(() => {

                    console.log(
                        "Música iniciada después de la interacción ❤️"
                    );

                })
                .catch(() => {

                    console.log(
                        "No fue posible reproducir la música."
                    );

                });


            document.removeEventListener(
                "touchstart",
                startMusicOnInteraction
            );

            document.removeEventListener(
                "click",
                startMusicOnInteraction
            );

        };


        document.addEventListener(
            "touchstart",
            startMusicOnInteraction,
            {
                once: true
            }
        );


        document.addEventListener(
            "click",
            startMusicOnInteraction,
            {
                once: true
            }
        );


        console.log(
            "Declaración cargada correctamente ❤️"
        );

    }
);