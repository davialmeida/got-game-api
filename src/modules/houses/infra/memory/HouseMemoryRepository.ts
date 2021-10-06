import { House } from "@modules/houses/House";
import { IHouseRepository } from "@modules/houses/interfaces/IHouseRepository";

export class HouseMemoryRepository implements IHouseRepository {
    private houses: House[] = [];

    static create() {
        const instance = new HouseMemoryRepository()

        return instance
    }

    async insert (house: House): Promise<House> {
        this.houses.push(house)

        return house
    }

    async list(): Promise<Array<House> | null> {
        const houses =  this.houses

        return houses.length ? houses : null
    }
    async findByName(name: string): Promise<Array<House> | null> {
        const houses = this.houses.filter(house => house.name === name)

        if (!houses.length) return null

        return houses
    }
    async findByID(uuid: string): Promise<House | null> {
        const house = this.houses.find(house => house.getUUID() === uuid)

        return house ?? null
    }
    async deleteById(uuid: string): Promise<Boolean> {
        this.houses = this.houses.filter(lord => lord.getUUID() !== uuid)

        return true
    }
  }