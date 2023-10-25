/**
 * Devuelve la suma de todos los elementos del array listado.
 */

function sumar(listado){
    let resultado=0;
    for(let i=0;i<listado.length;i++){
        resultado+=listado[i];
    }
    return resultado;
}

/**
 * Devuelve la multiplicacion de todos los elementos del array listado.
 */
function multiplicacion(listado){
    let resultado=listado[0];
    for(let i=1;i<listado.length;i++){
        resultado*=listado[i];
    }
    return resultado
}
let coleccion=[5,7,10,13,2,1,1,3];
console.log(sumar(coleccion));
console.log(multiplicacion(coleccion));
console.log(sumar([8,4,5,3,65,2,14]));
console.log(multiplicacion([8,45,6,25,7,96]));
