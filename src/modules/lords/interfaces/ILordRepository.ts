import { Lord } from "../Lord";

export interface ILordRepository {
    create: (house: Lord) => Promise<Lord | null>
    findByID: (uuid: string) => Promise<Lord | null>
    deleteById: (uuid: string) => Promise<null>
}