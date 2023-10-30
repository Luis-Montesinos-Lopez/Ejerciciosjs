let productos=[
  {
    nombre: 'Luffy onigashima',
    precio: 25,
    categoria: 'one piece',
    stock:true,
    cantidad:24
  },
  {
    nombre: 'Deku limited edition',
    precio: 75,
    categoria: 'boku no hero',
    stock:true,
    cantidad:4
  },
  {
    nombre: 'Itachi cuervos',
    precio: 48,
    categoria: 'naruto',
    stock:true,
    cantidad:1
  },
  {
    nombre: 'Goku ss blue',
    precio: 88,
    categoria: 'dragonball',
    stock:false,
    cantidad:0
  },
  {
    nombre: 'sanji onigashima',
    precio: 96,
    categoria: 'one piece',
    stock:true,
    cantidad:12
  },
  {
    nombre: 'Luffy onigashima',
    precio: 42,
    categoria: 'naruto',
    stock:true,
    cantidad:9
  },
  {
    nombre: 'Luffy onigashima',
    precio: 19,
    categoria: 'boku no hero',
    stock:true,
    cantidad:24
  },
  {
    nombre: 'Luffy onigashima',
    precio: 8,
    categoria: 'dragonball',
    stock:true,
    cantidad:24
  },
  {
    nombre: 'zoro onigashima',
    precio: 26,
    categoria: 'one piece',
    stock:false,
    cantidad:0
  },
  {
    nombre: 'nami onigashima',
    precio: 24,
    categoria: 'one piece',
    stock:true,
    cantidad:24
  },
];

let filtrarProducto=(coleccion,categoria)=>{
  let encontrado=[];
  coleccion.forEach(elemento => {
    if(elemento.categoria==categoria){
      encontrado.push(elemento);
      
    }
    
  });
  return `Los items que coinciden con la búsqueda son: \n${encontrado.map(e => JSON.stringify(e)).join('\n')}`;
}
console.log(filtrarProducto(productos,'naruto'));