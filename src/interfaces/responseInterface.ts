import { iBook } from "./bookInterface"


interface iResponse {
    success: boolean,
    data?: iBook[] | iBook,
    message?: string
}

export { iResponse }