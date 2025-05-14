import { Schema } from "mongoose";
import { iBook } from "../interfaces/bookInterface";

const bookSchema = new Schema<iBook>({
    title: { type:String, required:true, unique: true},
    author: { type: String, required: true},
    publishedYear: {type: Number, requiered: false},
    genre: {type: String, requiered: false},
    available: {type: Boolean}
})

