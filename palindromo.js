/**
Ejercicio Palindrome
Generar un algoritmo que nos compruebe si el string introducido es un palindromo. Se dice que un
string es palindromo cuando se puede leer igual de izquierda a derecha que de derecha a izquierda
 */
let readline = require("readline-sync");
let cad;
let cadInvertida;

// do{
//     palindromo=readline.question("Introduce una palabra: ");
//     palindromoInvertido=palindromo.reverse();
//     if(palindromo==palindromoInvertido){
//         console.log(`¡Bien!, ${palindromo} es un palindromo.`)

//     }else{
//         console.log(`¡Oh!, ${palindromo} no es un palíndromo, sigue intenandolo.`)
//     }
// }while(palindromo!=palindromoInvertido)

function invertirCadena(cad) {
    return cad.split("").reverse().join("");
}

cad=readline.question("Introduce una palabra: ");
// console.log(cad);
for(i=cad.length-1;i<=0;i--){
cadInvertida+=cad[i];
console.log(cadInvertida);}
invertirCadena();

