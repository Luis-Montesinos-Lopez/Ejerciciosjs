/**
 * Escriba un algoritmo que lea dos numeros y la operación a realizar, y retorne el valor
    de la operacion correcta segun el nombre de la funcion
 */
let readline = require("readline-sync");
let numeroUno;
let numeroDos;
let operacion;
while(isNaN(numeroUno)||isNaN(numeroDos)||numeroUno==""||numeroDos==""||operacion==""||(operacion!="sumar"&&operacion!="restar"&&operacion!="multiplicar"&&operacion!="dividir")){
    numeroUno=Number(readline.question("Introduzca un numero: "));
    numeroDos=Number(readline.question("Introduzca otro numero: "));
    operacion=readline.question("¿Que operacion desea realizar?").toLowerCase();
    if (isNaN(numeroUno)||isNaN(numeroDos)) {
        console.log(`Debes usar numeros.`)
    }else{
        if(numeroUno==""||numeroDos==""||operacion=="") {
            console.log(`Debes rellenar todos los campos`)
        } else {
            if (operacion=="sumar") {
                console.log(`La suma de ${numeroUno} mas ${numeroDos} es ${(numeroUno+numeroDos)}`);
            } else if(operacion=="restar"){
                console.log(`La resta de ${numeroUno} menos ${numeroDos} es ${(numeroUno-numeroDos)}`);
            }else if(operacion=="multiplicar"){
                console.log(`La multiplicacion de ${numeroUno} por ${numeroDos} es ${(numeroUno*numeroDos)}`);
            }else if(operacion=="dividir"){
                console.log(`La division de ${numeroUno} entre ${numeroDos} es ${(numeroUno/numeroDos)}`);
            }else{
                console.log(`Lo sentimos, solo se admite sumar, restar, multiplicar o divir`);
            }   
        }  
    }
}

