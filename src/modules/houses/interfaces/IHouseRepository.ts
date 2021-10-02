import { House } from "../House";

export interface IHouseRepository {
    create: (house: House) => Promise<House | null>
    list: () => Promise<Array<House> | null>
    /*findByName: () => Promise<>
    findByID: () => Promise<>
    deleteId: () => Promise<>*/
}