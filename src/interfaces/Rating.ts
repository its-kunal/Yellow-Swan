import User from "./User"
export default interface Rating {
    stars: number,
    description: string,
    writtenBy: Array<User>
}