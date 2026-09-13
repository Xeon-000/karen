/* =========================================================
   NAVEGACIÓN
   ========================================================= */


/*
 * Pantalla 1 → Pantalla 2
 */

document
    .getElementById("btn-screen-1")
    .addEventListener("click", () => {

        /*
         * Intentamos iniciar la música justo cuando
         * la persona toca el botón.
         *
         * Esto es importante para celulares.
         */
        if (typeof window.startBackgroundMusic === "function") {
            window.startBackgroundMusic();
        }

        showScreen("screen-2");

    });


/*
 * Pantalla 2 → Pantalla 3
 */

document
    .getElementById("btn-screen-2")
    .addEventListener("click", () => {

        showScreen("screen-3");

    });


/* =========================================================
   RESPUESTA "SÍ"
   ========================================================= */

document
    .getElementById("btn-yes")
    .addEventListener("click", () => {

        showScreen("success-screen");

    });


/* =========================================================
   BOTONES VOLVER
   ========================================================= */


/*
 * Pantalla 2 → Pantalla 1
 */

document
    .getElementById("btn-back-2")
    .addEventListener("click", () => {

        showScreen("screen-1");

    });


/*
 * Pantalla 3 → Pantalla 2
 */

document
    .getElementById("btn-back-3")
    .addEventListener("click", () => {

        showScreen("screen-2");

    });


/* =========================================================
   BOTÓN "NO"
   ========================================================= */

const btnNo =
    document.getElementById("btn-no");


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


btnNo.addEventListener("click", () => {

    noClickCount++;


    /*
     * Cambiar el mensaje del botón.
     *
     * Cuando llegamos al final de la lista,
     * vuelve a comenzar.
     */

    const messageIndex =
        noClickCount % noMessages.length;


    btnNo.textContent =
        noMessages[messageIndex];

});
