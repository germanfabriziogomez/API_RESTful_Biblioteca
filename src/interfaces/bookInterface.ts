interface iBook extends Document {
    title:string,
    author:string,
    publishedYear?:number,
    genre?:string,
    available:boolean,
}

export {iBook}