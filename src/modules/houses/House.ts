import { Entity } from "src/shared/domain/Entity"
import { IHouseProps } from "./interfaces/IHouseProps"


export class House extends Entity<IHouseProps> {
    private constructor({ uuid, ...data }: IHouseProps) {
        super(data, uuid)
    }

    public static create(props: IHouseProps) {
        const instance = new House(props)

        return instance
    }
}