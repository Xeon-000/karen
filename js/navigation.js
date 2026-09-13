/* =========================================================
   NAVEGACIÓN ENTRE PANTALLAS
   ========================================================= */


/**
 * Muestra una pantalla determinada.
 *
 * @param {string} screenId
 */
function showScreen(screenId) {

    const screens = document.querySelectorAll(".screen");

    screens.forEach((screen) => {
        screen.classList.remove("active");
    });


    const targetScreen =
        document.getElementById(screenId);


    if (!targetScreen) {
        console.error(
            `No existe la pantalla: ${screenId}`
        );

        return;
    }


    targetScreen.classList.add("active");
}