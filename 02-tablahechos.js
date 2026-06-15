const hechos = [
  { padre: "Juan", hijo: "Luis" },
  { padre: "Juan", hijo: "Pedro" },
  { padre: "Abraham", hijo: "Juan" }
];

// Regla 1: Dos personas son hermanos
function SonHermanos(a, b) {
  return hechos.some(
    h1 =>
      h1.hijo === a &&
      hechos.some(
        h2 =>
          h2.hijo === b &&
          h1.padre === h2.padre &&
          a !== b
      )
  );
}

// Regla 2: A es abuelo de C
function EsAbuelo(a, c) {
  return hechos.some(
    h1 =>
      h1.padre === a &&
      hechos.some(
        h2 =>
          h2.padre === h1.hijo &&
          h2.hijo === c
      )
  );
}

// Resultados del ejercicio
console.log(SonHermanos("Luis", "Pedro"));
console.log(EsAbuelo("Abraham", "Luis"));
console.log(EsAbuelo("Abraham", "Pedro"));


// 1. ¿Es cierto que Abraham es padre de Juan?
function EsPadre(padre, hijo) {
  return hechos.some(
    dato =>
      dato.padre === padre &&
      dato.hijo === hijo
  );
}

console.log("¿Es cierto que Abraham es padre de Juan?");
console.log(EsPadre("Abraham", "Juan"));


// 2. ¿Quién es el padre de Luis?
function PadreDe(hijo) {
  return hechos.find(
    dato => dato.hijo === hijo
  );
}

console.log("¿Quién es el padre de Luis?");
console.log(PadreDe("Luis").padre);


// 3. ¿Quiénes son los hijos de Juan?
function HijosDe(padre) {
  return hechos.filter(
    dato => dato.padre === padre
  );
}

console.log("¿Quiénes son los hijos de Juan?");
console.log(HijosDe("Juan").map(dato => dato.hijo));