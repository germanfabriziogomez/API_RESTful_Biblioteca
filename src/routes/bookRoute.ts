import { Router, Request, Response } from "express";
import { app_url } from "../index"
import { getAllBooks } from "../controllers/bookController";

const bookRouter = Router()
bookRouter.get("/", getAllBooks);

export {bookRouter}