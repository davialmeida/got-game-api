import { House } from "../House";


export interface IHouseRepository {
    insert: (house: House) => Promise<House | null>
    list: () => Promise<Array<House> | null>
    findByName: (name: string) => Promise<Array<House> | null>
    findByID: (uuid: string) => Promise<House | null>
    deleteById: (uuid: string) => Promise<Boolean>
}