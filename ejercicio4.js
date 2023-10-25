/**
 * Cree un algoritmo que reciba 3 numeros y, si el primero de ellos
 es negativo, retorne el producto de los 3, si no lo es, retornara
 la suma. Si no se introducen tres numeros validos, retornara un string
 que diga Has introducido uno o varios caracteres no validos
 */

 let readline=require('readline-sync')
 let numeroUno=Number(readline.question("Introduzca un numero: "));
 let numeroDos=Number(readline.question("Introduzca un segundo numero: "));
 let numeroTres=Number(readline.question("Introduzca un tercer numero: "));

 if(isNaN(numeroUno)||isNaN(numeroDos)||isNaN(numeroTres)||numeroUno==""||numeroDos==""||numeroTres==""){
    console.log(`Has introducido uno o varios caracteres no validos`)
 }else{
    if (numeroUno<0) {
        console.log(`Como el primer numero es negativo, se realizara la multiplicacion de ${numeroUno} por ${numeroDos} por ${numeroTres}, cuyo resultado es: ${(numeroUno*numeroDos*numeroTres)} `)
        
    } else {
        console.log(`Como el primer no es negativo, se realizara la suma de ${numeroUno} mas ${numeroDos} mas ${numeroTres}, cuyo resultado es: ${(numeroUno+numeroDos+numeroTres)} `)
    }
 }