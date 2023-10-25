let coleccion = [5, 7, 10, 13, 2, 1, 1, 3];
let resultado =0;
// let resultado=coleccion[0];
// for (let i = 1; i < coleccion.length; i++) {
//     resultado *=coleccion[i]; 
// }
// console.log(resultado);

// for (let i = 0; i < coleccion.length; i++) {
//     if(coleccion[i]!=1){
//         resultado+=coleccion[i];
//     }else{
//         break
//     }
// }


let i=0;
// while(coleccion[i]!=1){
//     resultado+=coleccion[i++];
//     
// }


do{resultado+=coleccion[i];
   
}while(coleccion[ i++]!=1)

console.log(resultado);