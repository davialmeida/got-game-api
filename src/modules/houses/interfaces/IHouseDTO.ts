import { IHouseProps } from "./IHouseProps";

export interface IHouseDTO extends Omit<IHouseProps, 'current_lord'> {
    current_lord_id?: string | null
}