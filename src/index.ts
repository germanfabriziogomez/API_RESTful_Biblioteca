import { connectDB, PORT } from "./config/mongo";
import express from 'express'
import { bookRouter } from './routes/bookRoute'


//Creo el server
const server = express();

//permito que el front me envie datos tipo json en el body
server.use(express.json());

//pongo al server en escucha
server.listen(PORT, () => {
    connectDB();
    console.log("Aplicacion escuchando en el puerto ", PORT);
})

//asigno routes para cada endpoint
server.use("/books", bookRouter)
