import { Lord } from "src/modules/lords/Lord";
import { House } from "../House"

export interface IHouseRepository {
    create: (house: House, lord: Lord | null) => Promise<House | null>
    list: () => Promise<Array<House> | null>
    findByName: (name: string) => Promise<Array<House> | null>
    findByID: (uuid: string) => Promise<House | null>
    deleteById: (uuid: string) => Promise<null>
}