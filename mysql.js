const mysql = require("mysql2");
//crear conexion a base de datos polo_digital en mysql
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "W3llc0m3@",
  database: "polo_digital",
});

//conectarse al servidor de mysql local
connection.connect(function (error) {
  if (error) {
    return console.error(`error: ${error.message}`);
  }
  console.log("Conectado a MySQL!!!");
});
//Hacer una consulta
// connection.query('select * from empleadosclientes', function(error, result, fields){
//     if(error){
//         return console.error(`error: ${error.message}`)
//     }

// let ordenarNombre=(usuarios)=>{
// let nombreOrdenado=[usuarios[0].nombre];
// for(let i=0;i<usuarios.length;i++){
//     for(let j=0;j<usuarios.length-1;j++){
//     if(usuarios[j].nombre>usuarios[j+1].nombre){
//         nombreOrdenado=usuarios[j+1];
//         usuarios[j+1]=usuarios[j];
//         usuarios[j]=nombreOrdenado;
//     }}}
//     return usuarios;

// };
// console.log(ordenarNombre(result));

//     let ordenarApellidos=(usuarios)=>{
//         let apellidoOrdenado=[];
//         for(let i=0;i<usuarios.length;i++){
//             for(let j=0;j<usuarios.length-1;j++){
//                 if(usuarios[j].apellidos<usuarios[j+1].apellidos){
//                     apellidoOrdenado=usuarios[j+1];
//                     usuarios[j+1]=usuarios[j];
//                     usuarios[j]=apellidoOrdenado;
//                 }
//             }
//         }return usuarios;
//     }
//     console.log(ordenarApellidos(result));
// });
//  connection.query('select * from empleados', function(error, result,fields){
//     if(error){
//     return console.error(`error: ${error.message}`);
//     }
//     let salarioMax=(empleados)=>{
//         let salario=empleados[0].salario;
//         for(let i =0;i<empleados.length;i++){
//             if(empleados[i].salario>salario){
//                 salario=empleados[i].salario;
//             }

//         }return salario;
//     }
//     console.log(salarioMax(result));
//  })

connection.query("select * from usuarios", (error, result, fields) => {
  if (error) {
    console.error(`error: ${error}`);
  }

  let readline = require("readline-sync");
  let inicioSesion = (usuarios) => {
    let mensaje="";
    do {
      let emailUsuario = readline.question("introduce tu email: ");
      let contraseñaUsuario = readline.question("Introduce tu contraseña: ");
      for (let i = 0; i < usuarios.length; i++) {
        mensaje=""
        if (
          emailUsuario == usuarios[i].email &&
          contraseñaUsuario == usuarios[i].password
        ) {
          mensaje= `Inicio de sesion realizado. Bienvenido!!`;
          break;
        }
      }
      if(mensaje===""){
        mensaje=`No ha sido posible iniciar sesión. Inténtelo de nuevo`;
        console.log(mensaje);
      }
    } while (
        mensaje===`No ha sido posible iniciar sesión. Inténtelo de nuevo`);
        return mensaje;
    //     for(let i=0;i<result.length;i++){
    //     if(email==result[i].email&&password==result[i].password){
    //         return`Inicio de sesion realizado. Bienvenido!!`;
    //     };
    // } return`No ha sido posible iniciar sesión. Inténtelo de nuevo`;
  };
  console.log(inicioSesion(result));

  
});
//cerrar sesion
connection.end(function (error) {
  if (error) {
    return console.error(`error: ${error.message}`);
  }
  console.log("Desconectado de MySQL!!!");
});
