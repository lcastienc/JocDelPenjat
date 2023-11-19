let juegosIniciados = 0;
let juegosGanados = 0;
let juegosPerdidos = 0;

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

    do {
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
                return; // Salir del programa
            default:
                console.log("Opción no válida. Por favor, elige de nuevo.");
        }
    } while (true);
}
opcionJugador();

function iniciarJoc() {
    let palabraIntroducida = prompt("Introduce la palabra a adivinar: ");
    let palabraGuionada = "_".repeat(palabraIntroducida.length);
    const maxIntentos = 6;
    let intentosRealizados = 0;
    let letrasMalas = [];

    console.log(`La palabra a adivinar es: ${palabraGuionada.split('').join(' ')}`);

    while (palabraGuionada.includes("_") && intentosRealizados < 6) {

        let posibleLetra = prompt("Introduce una letra: ");

        if (posibleLetra.length !== 1 || !(/[a-zA-Z]/).test(posibleLetra)) {
            console.log("Has introducido más de una letra o un numero");
            continue;
        }

        if (palabraIntroducida.includes(posibleLetra)) {
            for (let index = 0; index < palabraIntroducida.length; index++) {
                if (palabraIntroducida[index] === posibleLetra) {
                    palabraGuionada = palabraGuionada.substring(0, index) + posibleLetra + palabraGuionada.substring(index + 1);
                }
            }
        } else {
            intentosRealizados++;
            letrasMalas.push(posibleLetra);
        }

        console.log(`Palabra invisible: ${palabraGuionada.split('').join(' ')}`);
        console.log(`Letras fallidas ${intentosRealizados}/${maxIntentos}: ${letrasMalas.join(', ')}`);
    }

    if (!palabraGuionada.includes("_")) {
        console.log("Has ganado, has adivinado la palabra");
        juegosGanados++;
    } else {
        console.log(`Has perdido, la palabra a adivinar era: ${palabraIntroducida}`);
        juegosPerdidos++;
    }
    juegosIniciados++;
    opcionJugador();
}

function mostrarEstadisticas() {
    console.log(`Total de partidas jugadas: ${juegosIniciados}`);
    console.log(`Partidas ganadas (${((juegosGanados / juegosIniciados) * 100).toFixed(2)}%): ${juegosGanados}`);
    console.log(`Partidas perdidas (${((juegosPerdidos / juegosIniciados) * 100).toFixed(2)}%): ${juegosPerdidos}`);
   
    opcionJugador();
}
