const clientes = [
    { nombre: 'Luis', historialLimpio: true, ingresosEstables: true },
    { nombre: 'María', historialLimpio: true, ingresosEstables: false },
    { nombre: 'Jorge', historialLimpio: false, ingresosEstables: true }
];

// 1. Tarjeta Black Historial limpio y ingresos estables

// Reglas
const historialLimpio = cliente => cliente.historialLimpio === true;
const ingresosEstables = cliente => cliente.ingresosEstables === true;

// Combinación de hechos
const tarjetaBlack = cliente => historialLimpio(cliente) && ingresosEstables(cliente);

// Consulta
const resultado1 = clientes.filter(tarjetaBlack);

console.log('Clientes que califican para Tarjeta Black:');
console.log(resultado1);

// 2. Programa de reactivación financiera No historial limpio o no ingresos estables

// Reglas
const historialManchado = cliente => cliente.historialLimpio === false;
const ingresosInestables = cliente => cliente.ingresosEstables === false;

// Combinación de hechos
const reactivacionFinanciera = cliente => historialManchado(cliente) || ingresosInestables(cliente);

// Consulta
const resultado2 = clientes.filter(reactivacionFinanciera);

console.log('Clientes para reactivación financiera:');
console.log(resultado2);

// 3. Riesgo medio Ingresos estables y no historial limpio

// Combinación de hechos
const riesgoMedio = cliente => ingresosEstables(cliente) && historialManchado(cliente);

// Consulta
const resultado3 = clientes.filter(riesgoMedio);

console.log('Clientes de riesgo medio:');
console.log(resultado3);


// 4. Riesgo crítico
// Existe al menos un cliente con historial manchado y sin ingresos estables

// Combinación de hechos
const riesgoCritico = cliente => historialManchado(cliente) && ingresosInestables(cliente);

// Consulta
const resultado4 = clientes.some(riesgoCritico);

console.log('¿Existe riesgo crítico?');
console.log(resultado4);


// 5. Certificación internacional Todos deben ser clientes seguros

// Reglas
const clienteSeguro = cliente => !(historialManchado(cliente) && ingresosInestables(cliente));

// Consulta
const resultado5 = clientes.every(clienteSeguro);

console.log('¿La cartera cumple la certificación?');
console.log(resultado5);