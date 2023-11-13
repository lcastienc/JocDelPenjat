//Mostrar las opciones por consola
function menuGame() {
    console.log("Menú del juego:");
    console.log("1-Iniciar un juego");
    console.log("2-Estadísticas");
    console.log("3-Salir");
}

//Comprobar que la eleccion sea correcta
function opcionJugador() {
    let opcionEscogida;

    while (true) {
        menuGame();
        opcionEscogida = parseInt(prompt("¿Qué quieres hacer?"));

        switch (opcionEscogida) {
            case 1:
                console.log("Has elegido iniciar un juego");
                iniciarJoc();
                break;
            case 2:
                console.log("Has elegido ver las estadísticas");
                mostrarEstadisticas();
                break;
            case 3:
                console.log("Has salido del juego");
                return;
            default:
                console.log("Opción no válida. Por favor, elige de nuevo.");
        }
    }
}

opcionJugador();