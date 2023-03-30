//1. Crear un objeto express

const express=require('express');
//2. Crear un objeto que represente nuestra aplicacion

const app = express();
app.use(express.json());
//3. Crear un servicio pàra escuchar peticiones

app.listen(
    3001,
    ()=>{
        console.log("Servidor ejecutandose en el puerto 3001");
    }
);

//Definir los entry point de la API
//Definir la ruta(url) en donde va a responder nuestra API
// http://localhost:3000/ruta

app.get(
    '/sumar',
    //Se requieren 2 objetos: uno representando la petición
    //otro objeto representando la respuesta
    (req, res)=>{
        // Aqui va el procesamiento de la petición a esta ruta
        console.log("Alguien está conectandose a esta ruta");
        res.json(req.body);
    }
);

app.post(
    '/restar',
    (req, res)=>{
        const n1=req.body.numero_1;
        const n2=req.body.numero_2;
        const resultado = n1-n2
        res.json(resultado);
    }
);

