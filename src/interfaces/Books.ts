import Rating from "./Rating";

export default interface Books {
    name: string,
    bookPublished: Date,
    ratings: Array<Rating>,
    description: string,
    genre: string,
    pages: number,
    publicationName: string,
    price: number,
    editionNumber?: number
}