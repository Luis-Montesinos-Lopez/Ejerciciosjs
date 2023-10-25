/**
 * Buscar si dentro de un array estan dos numeros dados, uno o ninguno.
 */

let readline=require('readline-sync');

let coleccion=[6,4,18,15,10,7];
let numeros=[6,7,8,18,4,87];

function buscar(coleccion1,coleccion2){
    let coleccionAux=[];
    
    for(i=0;i<coleccion2.length;i++){
        let boolean=false;
        for(j=0;j<coleccion1.length;j++){
             if(coleccion2[i]==coleccion1[j]){
                coleccionAux[i]=`${coleccion1[j]} está en la posicion ${j}`
                boolean=true;
             }
             else if(!boolean){
                coleccionAux[i]=`No existe`
            }}    
}return coleccionAux}




console.log(buscar(coleccion,numeros));