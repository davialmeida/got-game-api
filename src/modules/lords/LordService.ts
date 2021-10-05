import { ILordProps } from "./interfaces/ILordProps";
import { ILordRepository } from "./interfaces/ILordRepository";
import { Lord } from "./Lord";
import { LordMapper } from "./mappers/LordMapper";

export class LordService {
    constructor(
        private readonly lordRepository: ILordRepository
    ) {}

    async insert(props: ILordProps): Promise<Lord> {
        const lord = Lord.create(props)

        const lordAdded = await this.lordRepository.insert(lord)

        return lordAdded
    }

    async findByID (uuid: string): Promise<Lord | null> {
        const lordAdded = await this.lordRepository.findByID(uuid)

        return lordAdded
    }

    async deleteById (uuid: string): Promise<Boolean> {
        return this.lordRepository.deleteById(uuid)
    }


}