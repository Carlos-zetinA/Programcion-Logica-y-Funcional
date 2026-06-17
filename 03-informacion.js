const usuarios = [
    { nombre: 'Ana', edad: 25, rol: 'admin', activo: true },
    { nombre: 'Carlos', edad: 17, rol: 'user', activo: true },
    { nombre: 'Beto', edad: 30, rol: 'user', activo: false }
];


// 1. Se necesita enviar un correo a los usuarios que tienen su cuenta deshabilitada. 

// Reglas
const cuentaDeshabilitada = usuario => usuario.activo === false;

// Combinación de hechos
const enviarCorreo = usuario => cuentaDeshabilitada(usuario);

// Consulta
const resultado1 = usuarios.filter(enviarCorreo);

//console.log('Usuarios con cuenta deshabilitada:');
//console.log(resultado1);

// 2. Para poder entrar a una sección el usuario debe cumplir con dos condiciones estrictas: ser mayor de edad y tener cuenta activa

// Reglas
const mayorEdad = usuario => usuario.edad >= 18;
const cuentaActiva = usuario => usuario.activo === true;

// Combinación de hechos
const accesoSeccion = usuario => mayorEdad(usuario) && cuentaActiva(usuario);

// Consulta
const resultado2 = usuarios.filter(accesoSeccion);

//console.log('Usuarios que pueden entrar a la sección:');
//console.log(resultado2);

// 3. USe requiere una lista de usuarios especiales, si cuenta con un rol de admin y si es menor edad

// Reglas
const esAdmin = usuario => usuario.rol === 'admin';
const menorEdad = usuario => usuario.edad < 18;

// Combinación de hechos
const usuarioEspecial = usuario => esAdmin(usuario) && menorEdad(usuario);

// Consulta
const resultado3 = usuarios.filter(usuarioEspecial);

//console.log('Usuarios especiales:');
//console.log(resultado3);

// 4. Queremos saber quiénes tienen permiso para editar, la regla dicta que, el usuario debe estar activo (o debe ser administrador o mayor de edad). 

// Reglas
const usuarioActivo = usuario => usuario.activo === true;
const rolAdmin = usuario => usuario.rol === 'admin';
const esMayorEdad = usuario => usuario.edad >= 18;

// Combinación de hechos
const permisoEditar = usuario =>  usuarioActivo(usuario) &&  (rolAdmin(usuario) || esMayorEdad(usuario));

// Consulta
const resultado4 = usuarios.filter(permisoEditar);

console.log('Usuarios con permiso para editar:');
console.log(resultado4);