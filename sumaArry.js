/**
 * Haz un algoritmo que sume todos los números de un arry
 */

const lista = [12,12,5,1,9,7,12,54,45];
let resultado=0;
// for(i=0;i<lista.length;i++){
//     resultado+=lista[i];
// }

// for(i=0;i<lista.length;i++){
//     if(lista[i]%2==0){
//         resultado+=lista[i];
//     }
// }

for(i=0;i<lista.length;i++){
    if(i%2==1){
        resultado+=lista[i];
    }
}

console.log(`La suma de todos los números es ${resultado}`);
