 //1 ejercicio
//Congelar el arreglo
const transacciones = Object.freeze([
    { id: 101, tipo: 'deposito', monto: 60000, pais: 'México' },
    { id: 102, tipo: 'retiro', monto: 15000, pais: 'Colombia' },
    { id: 103, tipo: 'retiro', monto: 12000, pais: 'México' },
    { id: 104, tipo: 'retiro', monto: 55000, pais: 'México' },
    { id: 105, tipo: 'deposito', monto: 90000, pais: 'Francia' },
    { id: 106, tipo: 'retiro', monto: 75000, pais: 'España' }
]);
//Predicados atómicos
const esRetiro = t => t.tipo === "retiro";
const esMontoSospechoso = t => t.monto >= 50000;
const esZonaDeRiesgo = t => t.pais !== "México";
//Regla de negocio
const alertaFraude = t =>
    esRetiro(t) &&
    (esMontoSospechoso(t) ||
        esZonaDeRiesgo(t)
    );

//Generador perezoso
function* filtrarTransacciones(iterable,predicado){
    for(let transaccion of iterable){
        if(predicado(transaccion)){
            yield transaccion;
        }

    }

}

//Consulta
const detectarFraudes =
filtrarTransacciones(transacciones,alertaFraude);
//Mostrar resultados
console.log("Primera alerta:",detectarFraudes.next().value);
console.log("Segunda alerta:",detectarFraudes.next().value); 

 //Ejercicio 2 Congelamiento profundo (deepFreeze)

function deepFreeze(obj){
    Object.freeze(obj);
    Object.keys(obj).forEach(key => {
        if(  obj[key] !== null && typeof obj[key] === "object" &!Object.isFrozen(obj[key])){
            deepFreeze(obj[key]);
        }
    });
    return obj;
}
// Inmutabilidad
const aspirantes = deepFreeze([
    { nombre: 'Luis', examen: 90, entrevista: 80, estudioSocioeconomico: true },
    { nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true },
    { nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false },
    { nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true },
    { nombre: 'Iván', examen: 90, entrevista: 90, estudioSocioeconomico: true }
]);
// Procesamiento lineal (map)

const aspirantesPuntaje = aspirantes.map(aspirante => ({
    ...aspirante,
    puntajeFinal: (aspirante.examen * 0.70) + (aspirante.entrevista * 0.30)
}));

// Predicado

const calificaParaBeca = aspirante =>
    aspirante.puntajeFinal >= 85 &&
    aspirante.estudioSocioeconomico;

// Generador perezoso

function* filtrarBecados(iterable,predicado){ for(let aspirante of iterable){
//console.log("Analizando:", aspirante);
if(predicado(aspirante)){
            yield aspirante;
        }

    }

}
// Consulta

const becados = filtrarBecados(aspirantesPuntaje,calificaParaBeca);
// Primeros dos becados
const becado1 = becados.next().value;
const becado2 = becados.next().value;

console.log("Primer becado:", becado1);
console.log("Segundo becado:", becado2);

// Reduce
const promedioBecados =
[becado1, becado2].reduce( (acumulador, aspirante) => acumulador + aspirante.puntajeFinal,0) / 2;
console.log("Promedio de puntajes:", promedioBecados); 

//3 ejercicio 
//Congelamiento profundo
function deepFreeze(obj){Object.freeze(obj);Object.keys(obj).forEach(key=>{
if( obj[key]!==null && typeof obj[key]==="object" && !Object.isFrozen(obj[key])){
        deepFreeze(obj[key]);
        }
});
return obj;
}

const paquetes=deepFreeze([
    { tracking:'ZA1', estado:'Tabasco', peso:20 },
    { tracking:'ZA2', estado:'Veracruz', peso:18 },
    { tracking:'ZA3', estado:'Chiapas', peso:5 },
    { tracking:'ZA4', estado:'Yucatán', peso:25 },
    { tracking:'ZA5', estado:'Tabasco', peso:10 },
    { tracking:'ZA6', estado:'Oaxaca', peso:30 }
]);

const esDestinoLocal=paquete=>paquete.estado==="Tabasco";
const esPesado=paquete=>paquete.peso>=15;

//Definir la regla
const envioPrioritarioLocal=paquete=>!esDestinoLocal(paquete) &&esPesado(paquete);
//Definir la función
function* filtrarPaquetes(iterable,predicado){for(let paquete of iterable){
console.log("Analiza el arreglo:",paquete);
if(predicado(paquete)){
            yield paquete;
        }

    }

}
const paquetesPrioritarios=
filtrarPaquetes(paquetes,envioPrioritarioLocal);

//Mostrar resultados
const paquete1=paquetesPrioritarios.next().value;
const paquete2=paquetesPrioritarios.next().value;

console.log("Primer paquete:",paquete1);
console.log("Segundo paquete:",paquete2); 