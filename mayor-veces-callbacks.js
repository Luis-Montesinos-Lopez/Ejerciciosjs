/**
 * Dada una secuencia o array de operaciones matematicas hay que determinar cual de las operaciones
 * se ha ejecutado el mayor numero de veces.
 * 
 * Por ejemplo, dada la secuencia s = [multiplicar, dividir, dividir] debe mostrar por consola 
 * que la operacion mas usada ha sido dividir
 * 
 * Solo se permite incluir codigo en la funcion contar.
 */

const secuenciaUno = [suma, resta, resta, resta, suma, suma, suma, suma, resta, suma];
const secuenciaDos = [resta, resta, resta, resta, suma, suma, resta, resta, suma];

function suma(a, b) {
    return a + b;
}

function resta(a, b) {
    return a - b;
}

function contar(secuencia) {
    let masVeces;
    let contadorUno=0;
    let contadorDos=0;
    for(let i=0;i<secuencia.length;i++){
        if(secuencia[i](1,1)==2){
            contadorUno++;
        }else if(secuencia[i](1,1)==0){
            contadorDos++
        }
    }
    if(contadorDos>contadorUno){
        masVeces=resta;
    }else if(contadorUno>contadorDos){
        masVeces=suma;
    }
    return `La función más usada ha sido: ${masVeces}`;
}

console.log(contar(secuenciaUno)); // debe mostrar "suma"
console.log(contar(secuenciaDos)); // debe mostrar "resta"