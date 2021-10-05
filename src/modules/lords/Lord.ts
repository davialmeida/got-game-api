
import { Entity } from "@shared/domain/Entity"
import { ILordProps } from "./interfaces/ILordProps"

export class Lord extends Entity<ILordProps> {
    private constructor({ uuid, ...data }: ILordProps) {
        super(data, uuid)
    }

    public static create(props: ILordProps) {
        const instance = new Lord(props)

        return instance
    }

    public toObject(): ILordProps {
        return this.props
    }
}