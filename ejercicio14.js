/**En una tienda efectuan un descuento a los clientes dependiendo de la cantidad
 *  de la compra. El descuento se basa en lo siguiente:
 *
 *  Si el monto es menor que 500€ -> No hay descuento
 *  Si el monto está comprendido entre 500€ y 1.000€ inclusive –> 5% descuento
 *  Si el monto está entre 1.000€ y 7.000€ inclusive -> 10% descuento
 *  Si el monto está entre 7.000€ y 15.000€ inclusive -> 20% descuento
 *  Más de 15.000€ -> 25% descuento
 *
 *  El algoritmo recibira la cantidad y retornara el precio final aplicandole el
 *  descuento correspondiente. */


let readline =require("readline-sync");
let precio =readline.question("Introduce el precio del monto");
let precioNumero=Number(precio);
let precioFinal;
if(precioNumero<500){
    console.log("El precio final de su compra es: " + precioNumero + "€.");
}else if(precioNumero>=500 && precioNumero<=1000){
    precioFinal =precioNumero*0.05;
    console.log("El precio final de su compra es: " + (precioNumero-precioFinal) + " €.");
}else if(precioNumero >=1000 && precioNumero<=7000){
    precioFinal=precioNumero*0.10;
    console.log("El precio final de su compra es: " + (precioNumero-precioFinal) + " €.");
}else if(precioNumero >=7000 && precioNumero<=10000){
    precioFinal=precioNumero*0.20;
    console.log("El precio final de su compra es: " + (precioNumero-precioFinal) + " €.");
}else{
    precioFinal=precioNumero*0.25;
    console.log("El precio final de su compra es: " + (precioNumero-precioFinal) + " €.");
}
