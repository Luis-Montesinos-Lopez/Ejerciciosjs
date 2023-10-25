/**
Ejercicio sum7
Escribe una función que tome un array de numeros enteros de mas de 3 elementos
y retorne true si 3 elementos consecutivos suman 7
 */

let lista=[8,4,5,6,3,2,5,7,4,9,8,5,1,2,3,3,2,0,4,3,2,2,6,2,4,1,2];
for (let i = 0; i < lista.length-1; i++) {
    if(lista[i]+ lista[i+1]+ lista[i+2]==7){
        console.log(true)
    }else{
        console.log(false)
    }
}