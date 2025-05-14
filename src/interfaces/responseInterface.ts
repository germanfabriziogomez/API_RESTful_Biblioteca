import { iBook } from "./bookInterface"

interface iResponse 
{
    success: boolean,
    data?:iBook[],
    message?:string
}

export {iResponse}