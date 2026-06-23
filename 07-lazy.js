// Función para verificar si un número es primo
const primoNumero = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

// Función lazy (generador)
function* generarPrimos() {
    let eval = 2;

    while (true) {
        if (primoNumero(eval)) {
            yield eval;
        }
        eval++;
    }
}

const numerosPrimos = generarPrimos();

//console.log("Primo 1:", numerosPrimos.next().value);
//console.log("Primo 2:", numerosPrimos.next().value);
//console.log("Primo 3:", numerosPrimos.next().value);
//console.log("Primo 4:", numerosPrimos.next().value);
//console.log("Primo 5:", numerosPrimos.next().value);
//console.log("Primo 6:", numerosPrimos.next().value);
//console.log("Primo 7:", numerosPrimos.next().value);


//Obtener turno
    let contador = 1;
function obtenerTurno(){
    const turno= `Turno ${contador}`;
    contador++;
    return turno;
}

//console.log(obtenerTurno())
//console.log(obtenerTurno())

function* generarTurnos(){
    let contador = 1;
    while(true){
        yield `Turno ${contador}`;
        contador++;
    }
}

const cajero = generarTurnos();

//console.log(cajero.next().value)
//console.log(cajero.next().value)
//console.log(cajero.next().value)
//console.log(cajero.next().value)
//console.log(cajero.next().value)
//console.log(cajero.next().value)



// Procesador de palabras
function procesarPalabra(frase){
    const palabras = frase.split(" ");
    const resultado = [];

    for(let palabra of palabras){
        console.log(`procesado completo: ${palabra}`);
        resultado.push(palabra.toUpperCase());
    }

    return resultado;
}
const palabrasEscritas = procesarPalabra("programacion con js");

console.log("resultado:", palabrasEscritas[0]);

function* procesarDatos(frase){
    const palabras=frase.split("");
    for(let palabra of palabras){
        console.log(`procesado de datos${palabra}`)
        yield palabra.toUpperCase();
    }
}
const textoLeido=procesarDatos("programacion con js")
console.log("solo de lectura a la primera ");
console.log("resultado",textoLeido.next().value);

console.log("solo de lectura a la segunda ");
console.log("resultado",textoLeido.next().value);
