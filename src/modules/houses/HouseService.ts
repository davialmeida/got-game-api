import { ILordRepository } from "../lords/interfaces/ILordRepository"
import { House } from "./House"
import { HouseMap } from "./infra/mappers/HouseMapper"
import { IHouseDTO } from "./interfaces/IHouseDTO"
import { IHouseRepository } from "./interfaces/IHouseRepository"

export class HouseService {
    constructor(
        private readonly houseRepository: IHouseRepository,
        private readonly lordRepository: ILordRepository
    ) {}

    async insert(props: IHouseDTO): Promise<House | null>
    {        
        let {current_lord_id: lordId, ...houseProps} = props        
        let lord = null
        if (lordId) lord = await this.lordRepository.findByID(lordId);
        const house = House.create({current_lord: lord, ...houseProps})

        const houseAdded = await this.houseRepository.insert(house)

        return houseAdded ? HouseMap.toDomain(houseAdded) : null
    }

    async list(): Promise<Array<House> | null> {
        const houses = await this.houseRepository.list()

        return houses
    }
    
    async findByName(name: string): Promise<Array<House> | null> {
        const houses = await this.houseRepository.findByName(name)

        return houses
    }
    
    async findByID(id: string): Promise<House | null> {
        const house = await this.houseRepository.findByID(id)

        return house
    }
    
    async deleteById(id: string): Promise<Boolean> {
        return await this.houseRepository.deleteById(id)
    }
}