const cursos = [
  {
    titulo: "React Avanzado",
    categoria: "Desarrollo",
    esGratis: false,
    tieneCertificado: true
  },
  {
    titulo: "Introducción a UX/UI",
    categoria: "Diseño",
    esGratis: true,
    tieneCertificado: false
  },
  {
    titulo: "Node.js y MongoDB",
    categoria: "Desarrollo",
    esGratis: true,
    tieneCertificado: true
  },
  {
    titulo: "Figma para Principiantes",
    categoria: "Diseño",
    esGratis: false,
    tieneCertificado: false
  }
];

// 1. Cursos de Desarrollo que tengan certificado
const ejercicio1 = cursos.filter(
  curso => curso.categoria === "Desarrollo" &&
           curso.tieneCertificado === true
);

console.log("Ejercicio 1");
console.log(ejercicio1);

// 2. Cursos gratis o de la categoría Diseño
const ejercicio2 = cursos.filter(
  curso => curso.esGratis === true ||
           curso.categoria === "Diseño"
);

console.log("Ejercicio 2");
console.log(ejercicio2);

// 3. Cursos de pago que no tengan certificado
const ejercicio3 = cursos.filter(
  curso => curso.esGratis === false &&
           curso.tieneCertificado === false
);

console.log("Ejercicio 3");
console.log(ejercicio3);

// 4. Cursos de Desarrollo y que sean gratis o tengan certificado
const ejercicio4 = cursos.filter(
  curso => curso.categoria === "Desarrollo" &&
          (curso.esGratis === true ||
           curso.tieneCertificado === true)
);

console.log("Ejercicio 4");
console.log(ejercicio4); 
