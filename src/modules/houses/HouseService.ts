import { House } from "./House";
import { IHouseProps } from "./interfaces/IHouseProps";
import { IHouseRepository } from "./interfaces/IHouseRepository";

export class HouseService {
    constructor(
        private readonly houseRepository: IHouseRepository
    ) {}

    async create(props: IHouseProps): Promise<House | null>
    {        
        const house = House.create(props)
        
        const houseAdded = await this.houseRepository.create(house);

        return houseAdded;
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
    async deleteId() {}
}