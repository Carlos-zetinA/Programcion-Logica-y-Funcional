// Tabla de hechos
const hechos = [
    { padre: 'Juan', hijo: 'Luis' },
    { padre: 'Juan', hijo: 'Pedro' },
    { padre: 'Abraham', hijo: 'Juan' }
];

// Ejercicio 1: Dos personas son hermanos

// Reglas
const mismoPadre = (persona1, persona2) =>
    hechos.some(
        x => x.hijo === persona1 &&
        hechos.some(
            y => y.hijo === persona2 &&
            x.padre === y.padre
        )
    );

const personasDiferentes = (persona1, persona2) =>
    persona1 !== persona2;

// Combinación de hechos
const sonHermanos = (persona1, persona2) =>
    mismoPadre(persona1, persona2) &&
    personasDiferentes(persona1, persona2);

// Consulta
const resultado1 = sonHermanos('Luis', 'Pedro');

console.log('¿Luis y Pedro son hermanos?');
console.log(resultado1);


// Ejercicio 2: A es abuelo de C

// Reglas
const esPadreDe = (padre, hijo) =>
    hechos.some(
        x => x.padre === padre &&
             x.hijo === hijo
    );

// Combinación de hechos
const esAbueloDe = (abuelo, nieto) =>
    hechos.some(
        x =>
        esPadreDe(abuelo, x.hijo) &&
        esPadreDe(x.hijo, nieto)
    );

// Consultas
const resultado2 = esAbueloDe('Abraham', 'Luis');
const resultado3 = esAbueloDe('Abraham', 'Pedro');

console.log('¿Abraham es abuelo de Luis?');
console.log(resultado2);

console.log('¿Abraham es abuelo de Pedro?');
console.log(resultado3);



// PREGUNTAS LÓGICAS

// 1. ¿Es cierto que Abraham es padre de Juan?

const respuesta1 = esPadreDe('Abraham', 'Juan');

console.log('¿Es cierto que Abraham es padre de Juan?');
console.log(respuesta1);


// 2. ¿Quién es el padre de Luis?

const respuesta2 = hechos.find(
    x => x.hijo === 'Luis'
);

console.log('¿Quién es el padre de Luis?');
console.log(respuesta2.padre);


// 3. ¿Quiénes son los hijos de Juan?

const respuesta3 = hechos
    .filter(x => x.padre === 'Juan')
    .map(x => x.hijo);

console.log('¿Quiénes son los hijos de Juan?');
console.log(respuesta3);