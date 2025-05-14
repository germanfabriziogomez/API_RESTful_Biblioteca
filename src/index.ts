import { connectDB, PORT } from "./config/mongo";
import express, { json } from 'express'



//Creo el server
const server = express()

//permito que el front me envie datos tipo json en el body
server.use(express.json());

//pongo al server en escucha
server.listen(PORT, ()=>{
    connectDB();
    console.log("Aplicacion escuchando en el puerto ", PORT);
})

//ruta base
let app_url = "http://localhost:"+ PORT

//asigno routes para cada endpoint
server.get("")