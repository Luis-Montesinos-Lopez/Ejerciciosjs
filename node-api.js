let express = require('express');
let app=express();

app.get("/hola", (request,response)=>{
    response.send({mensaje: "hola qué tal"});
});

app.listen(8000,()=>{
    console.log("Server is up for running!!");
});