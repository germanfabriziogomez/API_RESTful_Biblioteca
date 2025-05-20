import { Schema, model } from "mongoose";
import { iBook } from "../interfaces/bookInterface";

const bookSchema = new Schema<iBook>({
    title: { type:String, required:true, unique: true},
    author: { type: String, required: true},
    publishedYear: {type: Number, requiered: false},
    genre: {type: String, required: false},
    available: {type: Boolean, required: false}
})

//Creo el modelo en la coleccion "books" siguiento el esquema bookSchema
const Book = model<iBook>("books",bookSchema);

export {bookSchema, Book}
