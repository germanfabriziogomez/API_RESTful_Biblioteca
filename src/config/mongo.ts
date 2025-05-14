import mongoose from "mongoose";

process.loadEnvFile()

const PORT = process.env.PORT || 8080
const URI_DB = process.env.URI_DB || ""

const connectDB = async () => {
    try {
        await mongoose.connect(URI_DB);
        console.log("Conectado a mongoose correctamente ...")
    } catch (error) {
        const err= error as Error
        console.log("Error al conectarse a mongoose", err.message);
    }
}

export {connectDB,PORT}