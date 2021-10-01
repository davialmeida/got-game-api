import { House } from "../House";

export interface IHouseRepository {
    create: (house: House) => Promise<House | null>
}