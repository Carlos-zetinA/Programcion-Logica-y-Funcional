// Arreglo de cursos
const cursos = [
    { titulo: 'React Avanzado', categoria: 'Desarrollo', esGratis: false, tieneCertificado: true },
    { titulo: 'Introducción a UX/UI', categoria: 'Diseño', esGratis: true, tieneCertificado: false },
    { titulo: 'Node.js y MongoDB', categoria: 'Desarrollo', esGratis: true, tieneCertificado: true },
    { titulo: 'Figma para Principiantes', categoria: 'Diseño', esGratis: false, tieneCertificado: false }
];

// 1. Encontrar los cursos de la categoría "Desarrollo" y que además tengan certificado

// Reglas
const cursosDesarrollo = curso => curso.categoria === 'Desarrollo';
const certificadoTrue = curso => curso.tieneCertificado === true;

// Combinación de hechos
const desarrolloAndCertificado = curso =>
    cursosDesarrollo(curso) && certificadoTrue(curso);

// Consulta
const resultado = cursos.filter(desarrolloAndCertificado);

console.log('Cursos de Desarrollo con certificado:');
console.log(resultado);

// 2. Buscar cursos completamente gratis o que pertenezcan a la categoría "Diseño"

// Reglas
const cursoGratis = curso => curso.esGratis === true;
const cursoDiseno = curso => curso.categoria === 'Diseño';

// Combinación de hechos
const gratisOrDiseno = curso =>
    cursoGratis(curso) || cursoDiseno(curso);

// Consulta
const resultado = cursos.filter(gratisOrDiseno);

console.log('Cursos gratis o de Diseño:');
console.log(resultado);


// 3. Encontrar una lista de cursos de pago que no tengan certificado

// Reglas
const cursoPago = curso => curso.esGratis === false;
const sinCertificado = curso => curso.tieneCertificado === false;

// Combinación de hechos
const pagoAndSinCertificado = curso =>
    cursoPago(curso) && sinCertificado(curso);

// Consulta
const resultado3 = cursos.filter(pagoAndSinCertificado);

console.log('Cursos de pago sin certificado:');
console.log(resultado3);

// 4. Encuentra los cursos que sean de Desarrollo y que sean Gratis o tengan certificado

// Reglas
const cursoDesarrollo = curso => curso.categoria === 'Desarrollo';
const cursoGratis = curso => curso.esGratis === true;
const certificadoTrue = curso => curso.tieneCertificado === true;

// Combinación de hechos
const beneficio = curso =>
    cursoGratis(curso) || certificadoTrue(curso);

const desarrolloAndBeneficio = curso =>
    cursoDesarrollo(curso) && beneficio(curso);

// Consulta
const resultado4 = cursos.filter(desarrolloAndBeneficio);

console.log('Cursos de Desarrollo con beneficio:');
console.log(resultado4);