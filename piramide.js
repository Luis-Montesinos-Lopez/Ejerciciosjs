/**
 * Pedir que ingrese un numero y pintar tantos asteriscos
 * como el numero introducido.
 */

let readline=require('readline-sync');
let numero=Number(readline.question('Introduce un número: '));
// for(i=0;i<numero;i++){ 
//     let lista="";     
//     for(j=0;j<numero-[i];j++){        
//         lista+="*";    
//     }
//     console.log(lista);
// }
// let linea="";
// for(i=0;i<numero;i++){
//         linea+="*"
//         console.log(linea);
//     }
let linea="";
for(i=0;i<numero;i++){
    
    for(k=0;k<numero-i-1;k++){
        linea+=" "
    }
         linea+="*";
    // for(j=0;j<i*2;j++){
    //     linea+="*";
    // }
  
    console.log(linea)
}


    







