//1. Ejercicio . Generador de ID únicos para una base de datos. 
function* generarIds() {
    for(let i = 1; i <= 100; i++) {
        yield `TEC-2026-${i}`;
    }
}

const ids = generarIds();

//console.log(ids.next().value);
//console.log(ids.next().value);
//console.log(ids.next().value);

//2. Ejercicio. Paginación infinita, al hacer scroll, se va cargando de 3 en 3.

const dbPosts = ["Post 1","Post 2","Post 3","Post 4", "Post 5","Post 6"];

function* obtenerFeedLazy(posts) {
    for(let post of posts) {console.log(`Procesando ${post}`);
        yield `<html>${post}</html>`;
    }
}
const feed = obtenerFeedLazy(dbPosts);

//console.log(feed.next().value);
//console.log(feed.next().value);
//console.log(feed.next().value);

//3. Ejercicio. Buscador de errores críticos en logs de un servidor.
const logsServidor = ["200 OK","200 OK","500 ERROR","200 OK","500 ERROR","404 NOT FOUND"];
function* buscarErrores(logs) {for(let log of logs) { if(log.includes("500")) {
            yield log;
        }
    }
}
const errores = buscarErrores(logsServidor);

//console.log(errores.next().value);
//console.log(errores.next().value);

//4. Generador de la serie de Fibonacci. 
function* serieFibonacci() { let a = 0; let b = 1;
    while(true) {
        yield a;
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
}

const fibonacci = serieFibonacci();

//console.log(fibonacci.next().value);
//console.log(fibonacci.next().value);
//console.log(fibonacci.next().value);
//console.log(fibonacci.next().value);
//console.log(fibonacci.next().value);

//5. Simulador de carrito de compras: Tienes un lote inmenso de productos y quieres aplicarles un IVA o descuento, pero el cliente en caja va pagando uno por uno de forma síncrona.
const preciosAlmacen = [100, 200, 300, 400, 500];

function* aplicarIvaLazy(precios) {
    for(let precio of precios) {
        yield precio * 1.16;
    }
}

const productos = aplicarIvaLazy(preciosAlmacen);

//console.log(productos.next().value);
//console.log(productos.next().value);
//console.log(productos.next().value);
//console.log(productos.next().value);
//console.log(productos.next().value);