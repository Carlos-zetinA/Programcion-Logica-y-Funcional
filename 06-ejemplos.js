const datod={
    nommbre: "Dany",
    edad: "40",
    ciudad:"Balancan",
    intereses:["React","JS"]
};
//ocultar propiedades
Object.defineProperty(datod, "edad",{enumerable: false})
console.log(Object.keys(datod))
console.log(Object.getOwnPropertyNames(datod))

function deepFreeze(obj){
    if(obj===null || typeof obj !=='Object' || Object.isFrozen(obj)){
        return obj;
    }
    //obtener todo el objeto
  const propiedadesObjeto=object.getOwnPropertyNames(obj);
  //recorrer cada una de las propieades
  for(let nombres of propiedades){
    const propiedadHijo=obj[nombres]}
    //aplicamosla funcion recursiva
    if(propiedadHijo && typeof propiedadHijo ==='object'){{
        deepFreeze(propiedadHijo)
    }
  }
  //congelamos todo el objeto de sus hijos 
  return Object.freeze(obj);
 
}

//pasar el objetp a la funcion recursiva
const  datosInmutbles=deepFreeze(datod)

//datosInmutbles.edad=30
const nuevoNombre=datosInmutbles.nombredatosInmutbles.intereses.ciudad="Tenosique"
const newInterest=datosInmutbles.intereses.push("JAVA")

console.log(nuevoNombre)
console.log(newInterest)