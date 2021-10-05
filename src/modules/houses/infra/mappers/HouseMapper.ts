import { House } from "@modules/houses/House";

export class HouseMap {

    public static toDomain(data: any) {
        const { uuid, name, region, foundation_year, current_lord } = data
        
        return House.create({ uuid, name, region, foundation_year, current_lord })
    }

    public static toDTO (house: House): any {
        return HouseMap.toPersistence(house)
    }
    public static toPersistence (house: House): any {
        const { uuid, name, region, foundation_year, current_lord } = house.toObject()
        return {
            uuid,
            name,
            region,
            foundation_year,
            current_lord: current_lord?.toObject() || null
        }
    }
}