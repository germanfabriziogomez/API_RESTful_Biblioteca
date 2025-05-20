import { Request, Response } from 'express'
import { Book } from '../models/book'
import { iResponse } from '../interfaces/responseInterface';
import { iBook } from '../interfaces/bookInterface';

const getAllBooks = async (req: Request, res: Response): Promise<any> => {
    try {
        const books: iBook[] = await Book.find({});
        const response: iResponse = { success: true, data: books }
        res.status(200).json(response);
    } catch (error) {
        const err = error as Error
        const response: iResponse = { success: false, message: err.message }
        res.status(500).json(response)
    }

}

const findBookWithId = async (req: Request, res: Response): Promise<any> => {
    // obtengo el id que me llego por parametro
    const id = req.params.id;

    try {
        const bookFounded = await Book.findById(id)
        // si no lo encuentro...
        if (!bookFounded) {
            const response: iResponse = { success: false, message: "Libro no encontrado :(" };
            return res.status(404).json(response)
        }
        else {
            const response: iResponse = { success: true, data: bookFounded }
            return res.status(200).json(response);
        }

    } catch (error) {
        const err = error as Error
        const response: iResponse = { success: false, message: err.message }
        return res.status(500).json(response)
    }
}
const addBook = async (req: Request, res: Response): Promise<any> => {

    try {
        //obtengo los datos enviados por el front haciendo el destructuring
        const { title, author, publishedYear, genre, available } = req.body;

        if (!title || !author) {
            const response: iResponse = { success: false, message: "Faltan enviar campos requeridos..." }
            return res.status(400).json(response);
        }
        else {
            // genero el libro
            const book = new Book({ title, author, genre, available })
            await book.save()
            // genero la respuesta
            const response: iResponse = { success: true, data: book, message: "libro agregado correctamente" }
            return res.status(201).json(response)
        }

    } catch (error) {
        const err = error as Error;
        // genero una respuesta del tipo error
        const response: iResponse = { success: false, message: err.message }
        return res.status(409).json(response) // respuesta 409 porque si sale por el catch significa que intentó actualizar un libro con un atributo que era unico
    }
}

const updateBook = async (req: Request, res: Response): Promise<any> => {
    try {
        //rescato el id
        const id = req.params.id;
        const body = req.body;
        //actualizo
        const bookUpdated: iBook | null = await Book.findByIdAndUpdate(id, body, { new: true });
        if (bookUpdated === null) {
            const response: iResponse = { success: false, message: "Error al actualizar libro. No existe libro con ese id" }
            return res.status(400).json(response)
        }
        else {
            const response: iResponse = { success: true, data: bookUpdated, message: "libro actualizado" }
            return res.status(200).json(response);
        }
    } catch (error) {
        const err = error as Error;
        const response: iResponse = { success: false, message: err.message }
        return res.status(500).json(response)
    }
}

const deleteBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id;
        const bookFounded = await Book.findByIdAndDelete(id);
        if (bookFounded === null) {
            const response: iResponse = { success: false, message: "Error al eliminar el libro. No existe un libro con ese id" }
            return res.status(400).json(response)
        }
        else {
            const response: iResponse = { success: true, message: "libro eliminado correctamente" }
            return res.status(200).json(response);
        }
    } catch (error) {
        const err = error as Error;
        const response: iResponse = { success: false, message: err.message }
        return res.status(500).json(response);
    }
}
export { getAllBooks, addBook, findBookWithId, updateBook, deleteBook }