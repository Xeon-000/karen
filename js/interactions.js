/* =========================================================
   NAVEGACIÓN
   ========================================================= */


/*
 * PANTALLA 1 → PANTALLA 2
 */

document
    .getElementById("btn-screen-1")
    .addEventListener("click", () => {


        /*
         * Intentar iniciar la música.
         */

        if (
            typeof window.startBackgroundMusic === "function"
        ) {

            window.startBackgroundMusic();

        }


        showScreen("screen-2");

    });



/*
 * PANTALLA 2 → PANTALLA 3
 */

document
    .getElementById("btn-screen-2")
    .addEventListener("click", () => {

        showScreen("screen-3");

    });



/* =========================================================
   ELEMENTOS DE LA CARTA
   ========================================================= */

const letterContainer =
    document.getElementById(
        "letter-container"
    );


const envelope =
    document.getElementById(
        "envelope"
    );


const openLetter =
    document.getElementById(
        "open-letter"
    );


const closeLetter =
    document.getElementById(
        "btn-close-letter"
    );


const letterHint =
    document.getElementById(
        "letter-hint"
    );



/* =========================================================
   ABRIR CARTA
   ========================================================= */

envelope.addEventListener(
    "click",
    () => {


        /*
         * Si ya está abierta,
         * no hacemos nada.
         */

        if (
            letterContainer.classList.contains(
                "open"
            )
        ) {

            return;

        }


        /*
         * Iniciar música.
         *
         * Como esto ocurre después de tocar
         * la carta, el celular normalmente
         * permitirá reproducirla.
         */

        if (
            typeof window.startBackgroundMusic === "function"
        ) {

            window.startBackgroundMusic();

        }


        /*
         * Comienza la animación
         * de apertura.
         */

        letterContainer.classList.add(
            "opening"
        );


        /*
         * Ocultar indicación.
         */

        letterHint.style.opacity = "0";


        /*
         * Esperamos a que el sobre
         * termine de desaparecer.
         */

        setTimeout(() => {


            /*
             * Quitamos la animación
             * de apertura.
             */

            letterContainer.classList.remove(
                "opening"
            );


            /*
             * Mostramos la carta grande.
             */

            letterContainer.classList.add(
                "open"
            );


        }, 650);

    }
);



/* =========================================================
   CERRAR CARTA
   ========================================================= */

closeLetter.addEventListener(
    "click",
    () => {


        /*
         * Primero hacemos desaparecer
         * la carta grande.
         */

        letterContainer.classList.remove(
            "open"
        );


        /*
         * Después de la animación,
         * volvemos a mostrar el sobre.
         */

        setTimeout(() => {


            letterHint.style.opacity = "0.75";


        }, 600);

    }
);



/* =========================================================
   PANTALLA 3
   ========================================================= */

document
    .getElementById("btn-yes")
    .addEventListener(
        "click",
        () => {

            showScreen(
                "success-screen"
            );

        }
    );



/* =========================================================
   BOTONES VOLVER
   ========================================================= */


/*
 * Pantalla 2 → Pantalla 1
 */

document
    .getElementById("btn-back-2")
    .addEventListener(
        "click",
        () => {

            showScreen(
                "screen-1"
            );

        }
    );



/*
 * Pantalla 3 → Pantalla 2
 */

document
    .getElementById("btn-back-3")
    .addEventListener(
        "click",
        () => {

            showScreen(
                "screen-2"
            );

        }
    );



/* =========================================================
   BOTÓN "NO"
   ========================================================= */

const btnNo =
    document.getElementById(
        "btn-no"
    );


const noMessages = [

    "No 😢",

    "¿Segura? 🥺",

    "Piénsalo otra vez 😭",

    "¿De verdad? 🥹",

    "No me hagas esto 💔",

    "Mira que te lo estoy preguntando bonito ❤️",

    "Última oportunidad 👀",

    "¿En serio vas a decir que no? 😭",

    "Ese botón no parece una buena opción... 😂",

    "Creo que te equivocaste de botón 🥺",

    "Inténtalo otra vez ❤️",

    "¿Y si mejor dices que sí? 🥹",

    "No acepto esa respuesta todavía 😂❤️",

    "Vamos... tú sabes cuál es la respuesta 😌❤️"

];


let noClickCount = 0;


btnNo.addEventListener(
    "click",
    () => {


        noClickCount++;


        const messageIndex =
            noClickCount %
            noMessages.length;


        btnNo.textContent =
            noMessages[messageIndex];

    }
);
