import { ILordRepository } from "../lords/interfaces/ILordRepository"
import { Lord } from "../lords/Lord"
import { House } from "./House"
import { DeletedItem } from "./interfaces/DeletedItem"
import { IHouseDTO } from "./interfaces/IHouseDTO"
import { IHouseProps } from "./interfaces/IHouseProps"
import { IHouseRepository } from "./interfaces/IHouseRepository"

export class HouseService {
    constructor(
        private readonly houseRepository: IHouseRepository,
        private readonly lordRepository: ILordRepository
    ) {}

    async create(props: IHouseDTO): Promise<House | null>
    {        
        const {current_lord_id: lordId, ...houseProps} = props        
        let lord = null
        if (lordId) lord = await this.lordRepository.findByID(lordId);

        const house = House.create(houseProps)
        
        const houseAdded = await this.houseRepository.create(house, lord)

        return houseAdded
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
    
    async deleteById(id: string): Promise<DeletedItem> {
        await this.houseRepository.deleteById(id)

        return {
            message: 'Item deleted'
        }
    }
}