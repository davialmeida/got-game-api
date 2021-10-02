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

    async list() {
        const houses = await this.houseRepository.list()

        return {
            houses
        }
    }
    async findByName() {}
    async findByID() {}
    async deleteId() {}
}