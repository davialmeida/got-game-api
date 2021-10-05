import mongoose from 'mongoose'
import { Lord } from 'src/modules/lords/Lord';
import { House } from '../../House';
import { IHouseRepository } from '../../interfaces/IHouseRepository';
import { HouseMap } from '../mappers/HouseMapper';
import { HouseMongoModel } from './HouseMongoModel';

export class HouseMongoRepository implements IHouseRepository {
    static create() {
        const instance = new HouseMongoRepository()

        return instance
    }
    async insert (house: House): Promise<House>  {        
        try {
            const houseToPersist = HouseMap.toPersistence(house)
            await HouseMongoModel.insertMany([houseToPersist]);
            
            return house
        } catch(err) {
            throw new Error('An error occurred while trying to insert a house')
        }        
    }

    async list (): Promise<Array<House> | null> {
        try {
            const houses = await HouseMongoModel.find({}, '-_id').lean()

            if (!houses?.length) return null

            return houses.map(HouseMap.toDomain)
        } catch(err) {
            throw new Error('An error occurred while trying to list houses')
        }
    }
    
    async findByName (name: string): Promise<Array<House> | null> {
        try {
            const houses = await HouseMongoModel.find({name}).lean()
        
            if (!houses?.length) return null

            return houses.map(HouseMap.toDomain)
        } catch(err) {
            throw new Error('An error occurred while trying to find houses by name')
        }
    }
    
    async findByID (uuid: string): Promise<House | null> {
        try {
            const house = await HouseMongoModel.findOne({uuid}).lean()
        
            if (!house) return null

            return HouseMap.toDomain(house)
        } catch(err) {
            throw new Error('An error occurred while trying to find houses by id')
        }
    }
    
    async deleteById (uuid: string): Promise<Boolean> {
        try {
            await HouseMongoModel.deleteOne({uuid})

            return true
        } catch(err) {
            throw new Error('An error occurred while trying to delete house by id')
        }
    }
}