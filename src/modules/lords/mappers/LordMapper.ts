import { Lord } from "../Lord";

export class LordMapper {
    static toDomain(data: any) {
        const { uuid, name, seasons } = data

        return Lord.create({uuid, name, seasons})
    }

    static toDTO(lord: Lord) {
        return LordMapper.toPersistence(lord)
    }
    
    static toPersistence(lord: Lord) {
        return lord.toObject()
    }
}