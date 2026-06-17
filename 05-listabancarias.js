const transacciones = Object.freeze([
    { id: 1, tipo: 'deposito', monto: 10000 },
    { id: 2, tipo: 'retiro', monto: 6000 },
    { id: 3, tipo: 'retiro', monto: 1500 },
    { id: 4, tipo: 'retiro', monto: 8000 }
]);

const retirosRiesgo = transacciones.filter( t => t.tipo === 'retiro' && t.monto > 5000 );
const penalizados = retirosRiesgo.map(t => ({ ...t, penalizacion: t.monto * 0.05 }));
const total = penalizados.reduce( (a, t) => a + t.penalizacion,0);

console.log("Retiros de riesgo:", retirosRiesgo);
console.log("Transacciones penalizadas:", penalizados);
console.log("Total penalizado:", total);