/**
 * Crear una funcion que recibe como parametros un array y un array de numeros y un numero
 * la funcion tiene que devolver la posicion del numero dentro del array 
 * o no existe si numero no esta en el array 
 * 
 * 
 * 
 * datos de ejercicio
 * array=[4,6,18,15,10] numero=18
 * array=[1,2,3,4,5,6] numero=8
 * array=[21,31,41,51,61] numero=61
 */
let readline=require('readline-sync');

let coleccion1=[4,6,18,15,10];
let numero1=18;
let coleccion2=[1,2,3,4,5,6];
let numero2=8;
let coleccion3=[21,31,41,51,61];
let numero3=61;
// let coleccion=[readline.question('Introduce una secuencia de numeros: ')];
// let numero=Number(readline.question('Introduce un numero: '));


function buscarArray(elemento,num){
    for(i=0;i<elemento.length;i++){
            if(elemento[i]==num){
                return i;
    }
} 
return `no existe`}

console.log(buscarArray(coleccion1,numero1));
console.log(buscarArray(coleccion2,numero2));
console.log(buscarArray(coleccion3,numero3));