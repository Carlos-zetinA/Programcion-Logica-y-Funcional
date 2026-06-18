// Datos
const servicios = Object.freeze([
    {
        id: 1,
        nombre: 'Autenticación',
        zona: 'us-east',
        consultasPorMinuto: 12000,
        activo: true,
        tecnologias: ['Node', 'Redis']},
    {
        id: 2,
        nombre: 'Procesamiento Pagos',
        zona: 'us-west',
        consultasPorMinuto: 4500,
        activo: true,
        tecnologias: ['Java', 'Spring']},
    {
        id: 3,
        nombre: 'Recomendaciones AI',
        zona: 'us-east',
        consultasPorMinuto: 25000,
        activo: false,
        tecnologias: ['Python', 'TensorFlow'] },
    {
        id: 4,
        nombre: 'Notificaciones',
        zona: 'eu-central',
        consultasPorMinuto: 8500,
        activo: true,
        tecnologias: ['Node', 'RabbitMQ']},
    {
        id: 5,
        nombre: 'Reportes Históricos',
        zona: 'us-west',
        consultasPorMinuto: 500,
        activo: false,
        tecnologias: ['Python', 'MongoDB']}]);

// Predicados atómicos (Reglas)
const estaActivo = servicio => servicio.activo === true;
const esZonaUS = servicio => servicio.zona === 'us-east' || servicio.zona === 'us-west';
const esAltaCarga = servicio => servicio.consultasPorMinuto >= 10000;
const usaNode = servicio => servicio.tecnologias.includes('Node');

// Composición de reglas
// Regla A
const requiereMantenimientoUrgente = servicio => !estaActivo(servicio) && esAltaCarga(servicio);

// Regla B
const esServicioCriticoUS = servicio => estaActivo(servicio) && (esZonaUS(servicio) || esAltaCarga(servicio));

// Regla C
const migrarACloudflare = servicio => esZonaUS(servicio) && usaNode(servicio) && !esAltaCarga(servicio);

// Filter y Map Servicios críticos
const serviciosCriticos = servicios.filter(esServicioCriticoUS) .map(servicio => servicio.nombre);
console.log("Servicios críticos:");
console.log(serviciosCriticos);

// Filter y Map Mantenimiento urgente
const serviciosMantenimiento = servicios .filter(requiereMantenimientoUrgente) .map(servicio => servicio.nombre);
console.log("Servicios que requieren mantenimiento urgente:");
console.log(serviciosMantenimiento);

// Reduce, Total consultas de servicios activos
const totalConsultas = servicios.filter(estaActivo).reduce((acumulado, servicio) => acumulado + servicio.consultasPorMinuto, 0);
console.log("Total consultas por minuto de servicios activos:");
console.log(totalConsultas);