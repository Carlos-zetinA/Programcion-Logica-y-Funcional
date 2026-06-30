/* Caso de estudio 1, Una empresa de desarrollo de software aloja sus bases de datos en un clúster en la nube. 
Recientemente, han sufrido intentos de inyección de código y saturación de memoria en sus 
servidores de producción. Se te ha encomendado diseñar un módulo en Node.js puro que analice 
un flujo masivo de peticiones HTTP de forma ultraeficiente (sin saturar la memoria RAM del 
servidor de monitoreo) y dispare alertas de seguridad bajo demanda.  */
function deepFreeze(obj){Object.freeze(obj); Object.keys(obj).forEach(key=>{
if(
obj[key]!==null &&
    typeof obj[key]==="object" && !Object.isFrozen(obj[key])
        ){deepFreeze(obj[key]);}
    });

    return obj;
}
const peticionesHttp = deepFreeze([
    { id: "REQ-01", metodo: "GET",  ipOrigen: "192.168.1.50", latenciaMs: 45,   tamanioPayloadKb: 2,    payload: "SELECT * FROM users" },
    { id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb: 1500, payload: "DROP TABLE users;--" },
    { id: "REQ-03", metodo: "GET",  ipOrigen: "192.168.1.55", latenciaMs: 12,   tamanioPayloadKb: 1,    payload: "ping" },
    { id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb: 950,  payload: "normal_profile_update" },
    { id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb: 1200, payload: "upload_heavy_image" },
    { id: "REQ-06", metodo: "GET",  ipOrigen: "172.16.25.40", latenciaMs: 50,   tamanioPayloadKb: 500,  payload: "exec MaliciousScript" }
]);

const esMetodoEscritura = peticion => peticion.metodo === "POST";
const esLatenciaAlta = peticion => peticion.latenciaMs >= 2000;
const esPayloadSospechoso = peticion => peticion.payload.includes("DROP") || peticion.payload.includes("SELECT")
 ||peticion.payload.includes("MaliciousScript");

//Definir la regla

const detectarAmenazaPotencial = peticion => esMetodoEscritura(peticion) &&
    (esLatenciaAlta(peticion) || esPayloadSospechoso(peticion));

//Definir la función

function* analizadorSeguridadLazy(flujo,regla){for(let peticion of flujo){
 console.log("Analizando peticiones:", peticion);
       if(regla(peticion)){
        yield peticion;
        }

    }

}

//Consulta
const amenazas = analizadorSeguridadLazy( peticionesHttp, detectarAmenazaPotencial);
//Mostramos  resultados
const amenaza1 = amenazas.next().value;
const amenaza2 = amenazas.next().value;

console.log("Primera amenaza:", amenaza1);
console.log("Segunda amenaza:", amenaza2);

//Reduce
const promedioPayload = [amenaza1, amenaza2].reduce((acumulador, peticion)=> acumulador + peticion.tamanioPayloadKb,0)/2;
console.log("Promedio del payload:", promedioPayload,"KB");

/*Caso de estudio 2, Una plataforma de comercio electrónico maneja miles de despachos de mercancía diariamente. 
Durante las horas pico, la base de datos central en MongoDB se satura debido a que los algoritmos 
tradicionales leen e intentan enrutar todas las órdenes del almacén simultáneamente. Se te pide 
desarrollar un servicio en JavaScript funcional que analice de forma perezosa el inventario de 
paquetes y asigne de manera inmediata las órdenes a los repartidores motorizados, deteniendo el 
flujo en cuanto un camión complete su capacidad. */
//Congelamiento profundo

function deepFreeze(obj){Object.freeze(obj); Object.keys(obj).forEach(key=>{
if(obj[key]!==null && typeof obj[key]==="object" && !Object.isFrozen(obj[key])
        ){ deepFreeze(obj[key]); }
    });
 return obj;
}

const ordenesEnvio = deepFreeze([
    { id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4, distanciaKm: 8, asegurado: false },
    { id: "ORD-102", tipo: "express", destino: "Veracruz", pesoKg: 22, distanciaKm: 120, asegurado: true },
    { id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15, asegurado: false },
    { id: "ORD-104", tipo: "express", destino: "Tabasco", pesoKg: 5, distanciaKm: 3, asegurado: false },
    { id: "ORD-105", tipo: "express", destino: "Yucatán", pesoKg: 18, distanciaKm: 250, asegurado: false },
    { id: "ORD-106", tipo: "express", destino: "Chiapas", pesoKg: 35, distanciaKm: 190, asegurado: true }
]);

//Definir los predicados

const esEnvioExpress = orden => orden.tipo === "express";
const esPaquetePesado = orden => orden.pesoKg >= 15;
const esRutaForanea = orden => orden.destino !== "Tabasco";


const esDespachoPrioritario = orden => esEnvioExpress(orden) &&
    ( esPaquetePesado(orden) || esRutaForanea(orden));

//Definir la función
function* despachadorOrdenesLazy(flujo,predicado){for(let orden of flujo){
console.log("Analiza el arreglo:", orden);
        if(predicado(orden)){yield orden; }

    }

}
//Consulta
const despachos = despachadorOrdenesLazy( ordenesEnvio, esDespachoPrioritario);

//Mostrar los resultados

const despacho1 = despachos.next().value;
const despacho2 = despachos.next().value;

console.log("Primer despacho:", despacho1);
console.log("Segundo despacho:", despacho2);

//Reduce
const promedioDistancia = [despacho1, despacho2].reduce((acumulador, orden)=> acumulador + orden.distanciaKm,0)/2;
console.log("Promedio de distancia:", promedioDistancia,"Km");