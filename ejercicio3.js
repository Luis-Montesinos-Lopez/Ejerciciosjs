/** 
 * Algoritmo que lea 3 números y nos retorne el mayor, o que en caso de serlo
 * nos retornara un string que diga iguales.
 */

let readline = require("readline-sync");

let numeroUno =Number(readline.question("Introduce un número: "));
let numeroDos =Number(readline.question("Introduce otro número: "));
let numeroTres =Number(readline.question("Introduce un tercer número: "));

// if ( numeroUno==numeroDos && numeroDos==numeroTres) {
//     console.log("iguales");
// } else if (numeroUno>=numeroDos && numeroUno>=numeroTres){
//     console.log(numeroUno);    
// } else if (numeroDos>=numeroUno && numeroDos>=numeroTres){
//     console.log(numeroDos);
// }else if(numeroTres>=numeroUno && numeroTres>=numeroDos){
//     console.log(numeroTres);
// }
if ( numeroUno==numeroDos && numeroDos==numeroTres) {
    console.log("iguales");
} else if (numeroUno>numeroDos || numeroUno>numeroTres){
    if (numeroUno==numeroDos && numeroUno>numeroTres){
        console.log(numeroUno,numeroDos)
    }else if(numeroUno>numeroDos && numeroUno==numeroTres){
        console.log(numeroUno,numeroTres)
    }else{
        console.log(numeroUno);
    }
} else if (numeroDos>numeroUno || numeroDos>numeroTres){
    if (numeroDos==numeroUno && numeroDos>numeroTres){
        console.log(numeroUno,numeroDos)
    }else if(numeroUno>numeroDos && numeroDos==numeroTres){
        console.log(numeroDos,numeroTres)
    }else{
        console.log(numeroDos);
    }
}else if(numeroTres>numeroUno || numeroTres>numeroDos){
    if (numeroTres==numeroDos && numeroTres>numeroUno){
        console.log(numeroTres,numeroDos)
    }else if(numeroTres>numeroDos && numeroUno==numeroTres){
        console.log(numeroUno,numeroTres)
    }else{
        console.log(numeroTres);
}}else if(isNaN(numeroUno)||isNaN(numeroDos)||isNaN(numeroTres)){
    console("Datos introducidos incorrectos.");
}