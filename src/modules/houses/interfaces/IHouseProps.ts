import { Lord } from "../../lords/Lord"

export interface IHouseProps {
    uuid?: string
    name: string
    region: string
    foundation_year?: string | null
    current_lord?: Lord | null
}