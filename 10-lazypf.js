const llenadoTanque=Object.freeze([
    "01-Magna",
    "02-Premium",
    "03-Magna",
    "04-Premium",
    "05-Premium"
])
//Defenir la regla o predicado
const esPremium=id=>id.includes("Premium");
//Definir la funcion
function* filtrarTipo(iterable,predicado){
    for(let gasolina of iterable){
        console.log("Analiza el arreglo: ", gasolina)
if(predicado(gasolina)){
    yield gasolina;
}
    }
}

//Definirmos la consulta 
const  bombadeCarga=filtrarTipo(llenadoTanque, esPremium)
//Mostrar en pantalla 
const Premium=bombadeCarga.next().value;
console.log("Tipos gas: ", Premium);