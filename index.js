//1. Crear un objeto express

const express=require('express');

//2. Crear un objeto que represente nuestra aplicacion

const app = express();

//3. Crear un servicio pàra escuchar peticiones

// app.listen(
//     3000,
//     ()=>{
//         console.log("Servidor ejecutandose en el puerto 3000");
//     }
// );

//Definir los entry point de la API
//Definir la ruta(url) en donde va a responder nuestra API
// http://localhost:3000/ruta

app.post(
    'sumar'
    {}=>{
        // Aqui va el procesamiento de la petición a esta ruta
        console.log("Alguien está conectandose a esta ruta");
    }

)