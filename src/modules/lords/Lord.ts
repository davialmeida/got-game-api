
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

    get name(): string {
        return this.props.name
    }

    set name(value: string) {
        this.props.name = value
    }

    get seasons(): Array<string> {
        return this.props.seasons
    }

    set seasons(value: Array<string>) {
        this.props.seasons = value
    }

    public toObject(): ILordProps {
        return this.props
    }
}