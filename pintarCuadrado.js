/**
 * pedir por consola un numero y crear un array de longitud de numero introducido que
 * contenga *. Ejemplo, introduce 2 y debe retornar ['*','*'];
 */

let readline = require("readline-sync");
// let numero=Number(readline.question("Dime la dimensión del array: "));
// let lista=[];
// lista.length=numero;
// console.log(lista);
// 
// for(i=0;i<lista.length;i++){
//     lista[i]='*';
// }
// for(i=0;i<numero;i++){
//     lista[i]='*';
// }

/*Solo el primer y ultimo elemento del arry el resto espacio*/
let numero=Number(readline.question("Dime la dimensión del array: "));
let lista=[];
for(i=0;i<numero;i++){
    if(i==0||i==numero-1){
        lista[i]='*';
    }else{
        lista[i]=' ';
    }
}
console.log(lista);


