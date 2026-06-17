//Freeze
const nombres={nombre:"dany", rol: "admin"};
nombres.rol= "user";
console.log(nombres);

const nombres2=Object.freeze({nombre:"dany", rol:"admin"})
const nombresModificados={...nombres2, rol:"user"};
console.log()

const calificaciones=Object.freeze([80,90,100,90]);
const sumaTota=calificaciones.reduce((a,valor)=> a+valor);
const promedio=sumaTota/calificaciones.length

console.log("Suma total:", sumaTota);
console.log("Promedio:", promedio);