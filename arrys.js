let coleccion = [5, 7, 10, 13, 2, 1, 1, 3];
// console.log(coleccion[0]);
// console.log(coleccion[3]);
// console.log(coleccion.length);

// coleccion[3]=2;
// console.log(coleccion);
// console.log(coleccion[coleccion.length-1]);

// for(let i=0; i<coleccion.length;i++){
//     console.log(coleccion[i]);
// }

let otraColeccion = [];
// coleccionDos=coleccion.reverse();
// console.log(coleccionDos);
for (let i = coleccion.length - 1; i >= 0; i--) {
  otraColeccion.push(coleccion[i]);
}
console.log(otraColeccion);
