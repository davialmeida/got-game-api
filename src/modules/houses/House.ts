
import { Lord } from "@modules/lords/Lord"
import { Entity } from "@shared/domain/Entity"
import { IHouseProps } from "./interfaces/IHouseProps"


export class House extends Entity<IHouseProps> {

    private constructor({ uuid, ...data }: IHouseProps) {
        super(data, uuid)
    }

    public static create(props: IHouseProps) {
        const instance = new House(props)

        return instance
    }

    get name() {
        return this.props.name
    }

    set name(value: string) {
        this.props.name = value
    }

    get region() {
        return this.props.region
    }

    set region(value: string) {
        this.props.region = value
    }

    get foundation_year() {
        return this.props.foundation_year
    }

    set foundation_year(value: string | undefined | null)  {
        this.props.foundation_year = value
    }
    
    get current_lord() {
        return this.props.current_lord
    }

    set current_lord(value: Lord | undefined | null)  {
        this.props.current_lord = value
    }

    public toObject(): any {
        return {uuid: this.uuid, ...this.props}
    }
}