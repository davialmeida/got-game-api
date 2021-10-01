import { House } from "./House";
import { IHouseProps } from "./interfaces/IHouseProps";
import { IHouseRepository } from "./interfaces/IHouseRepository";

export class HouseService {
    constructor(
        private readonly houseRepository: IHouseRepository
    ) {}

    async execute(props: IHouseProps)
    {        
        const house = House.create(props)
        
        try {
            const houseAdded = this.houseRepository.create(house);
        } catch(err) {
            //
        }
    }
}