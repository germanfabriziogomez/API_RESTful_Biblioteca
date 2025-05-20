import { Router, Request, Response } from "express";
import { getAllBooks, addBook, findBookWithId, updateBook, deleteBook } from "../controllers/bookController";

const bookRouter = Router()
bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", findBookWithId)
bookRouter.post("/", addBook)
bookRouter.patch("/:id", updateBook)
bookRouter.delete("/:id", deleteBook)
export { bookRouter }