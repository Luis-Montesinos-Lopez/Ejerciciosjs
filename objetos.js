const productos = [
  {
    nombre: "bicicleta",
    stock: 2,
    categoria: "Deportes",
    precio: 1000,
    valoracion: 4.8,
  },
  {
    nombre: "Xbox",
    stock: 20,
    categoria: "Videojuegos",
    precio: 350,
    valoracion: 4.0,
  },
  {
    nombre: "PS5",
    stock: 1,
    categoria: "Videojuegos",
    precio: 499,
    valoracion: 4.2,
  },
];
/**Ej 1: Funcion que calcula la media de las valoraciones */
function mediaVal(conjunto) {
  let media = 0;
  for (i = 0; i < conjunto.length; i++) {
    media += conjunto[i].valoracion / conjunto.length;
  }
  return `La valoración media de los productos es: ${media}`;
}
console.log(mediaVal(productos));

// /**Ej 2: Funcion que devuelve el nombre y el stock del producto mas caro */

function buscarCaro(coleccion) {
  let valor = coleccion[0].precio;
  for (i = 1; i < coleccion.length; i++) {
    if (coleccion[i].precio > valor) {
      valor = coleccion[i].precio;
    }
  }
  for (i = 0; i < coleccion.length; i++) {
    if (valor == coleccion[i].precio) {
      return `El producto de mayor precio es ${coleccion[i].nombre} y hay ${coleccion[i].stock} en Stock`;
    }
  }
}
console.log(buscarCaro(productos));

/**Ej 3: Funcion que recibe un listado de productos y una categoria, debe devolver
un array con los productos que son de la categoria del parametro de entrada */

function buscarCat(coleccion,clase){
    let lista=[];
    for(i=0;i<coleccion.length;i++){
        if(clase==coleccion[i].categoria){
          lista.push(coleccion[i].nombre);
        
        }
    }
    return `Los productos con la categoria ${clase} son: ${lista}`;
}
console.log(buscarCat(productos,"Videojuegos"));