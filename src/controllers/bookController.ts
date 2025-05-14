import {Request,Response} from 'express'
import { Book } from '../models/book'
import { iResponse } from '../interfaces/responseInterface';
import { iBook } from '../interfaces/bookInterface';

const getAllBooks = async (req:Request, res: Response): Promise<any> => {
    try {
        const books: iBook[] = await Book.find({});
        const response: iResponse = {success: true, data: books}
        res.json(response).status(200);
    } catch (error) {
        const err= error as Error
        const response: iResponse = {success: false, message: err.message}
        res.json(response).status(404)
    }

}
export {getAllBooks}