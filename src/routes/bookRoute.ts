import { Router, Request, Response } from "express";
import { getAllBooks, addBook } from "../controllers/bookController";

const bookRouter = Router()
bookRouter.get("/", getAllBooks);
bookRouter.post("/",addBook)
export { bookRouter }