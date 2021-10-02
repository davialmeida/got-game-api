import { House } from "../House";

export interface IHouseRepository {
    create: (house: House) => Promise<House | null>
    list: () => Promise<Array<House> | null>
    findByName: (name: string) => Promise<Array<House> | null>
    /*findByID: () => Promise<>
    deleteId: () => Promise<>*/
}