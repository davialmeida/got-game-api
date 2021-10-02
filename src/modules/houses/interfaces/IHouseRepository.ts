import { House } from "../House";

export interface DeletedItem {
    message: string
}

export interface IHouseRepository {
    create: (house: House) => Promise<House | null>
    list: () => Promise<Array<House> | null>
    findByName: (name: string) => Promise<Array<House> | null>
    findByID: (uuid: string) => Promise<House | null>
    deleteById: (uuid: string) => Promise<null>
}