import { Lord } from "../Lord";

export interface ILordRepository {
    insert: (lord: Lord) => Promise<Lord>
    findByID: (uuid: string) => Promise<Lord | null>
    deleteById: (uuid: string) => Promise<Boolean>
}