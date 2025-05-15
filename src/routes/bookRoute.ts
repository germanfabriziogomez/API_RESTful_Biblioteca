import { Router, Request, Response } from "express";
import { getAllBooks, addBook, findBookWithId } from "../controllers/bookController";

const bookRouter = Router()
bookRouter.get("/", getAllBooks);
bookRouter.get("/:id", findBookWithId)
bookRouter.post("/", addBook)
export { bookRouter }