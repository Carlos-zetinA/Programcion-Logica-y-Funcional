//combinar programacion lazy con funcional
//definir los predicados atomicos
const esPar=n=>n%2===0
const multiploCinco=n=>n%5===0
//definimos la funcion
function* filtrarNumeros(iterable,predicado){
    for(let dato of iterable){
        if(predicado(dato)){
            yield dato;
        }
    }
}

function* generarNumeros(){
    let i=0;
    while (true) yield i++;
}

//Generar los numeros a traves de una variable 
const numeroAleatorio=generarNumeros();
const generarPares=filtrarNumeros
(numeroAleatorio,esPar)
console.log("Primer numero par:", generarPares.next ().value)
console.log("Primer numero par:", generarPares.next ().value) 
 console.log("Primer numero par:", generarPares.next ().value) 