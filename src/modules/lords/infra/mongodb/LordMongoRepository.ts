import { ILordRepository } from '@modules/lords/interfaces/ILordRepository';
import { Lord } from '@modules/lords/Lord';
import { LordMapper } from '@modules/lords/mappers/LordMapper';
import { LordMongoModel } from './LordMongoModel';



export class LordMongoRepository implements ILordRepository {
    static create() {
        const instance = new LordMongoRepository()

        return instance
    }
    async insert (lord: Lord): Promise<Lord>  {
        try {
            const houseToPersist = LordMapper.toPersistence(lord)
            await LordMongoModel.insertMany([houseToPersist]);
            
            return lord
        } catch(err) {
            throw new Error('An error occurred while trying to insert a lord')
        }    
    }

    async findByID (uuid: string): Promise<Lord | null>  {
        try {
            const lord = await LordMongoModel.findOne({uuid}).lean()
        
            if (!lord) return null

            return LordMapper.toDomain(lord)
        } catch(err) {
            throw new Error('An error occurred while trying to find a lord')
        }
    }

    async deleteById (uuid: string): Promise<Boolean>  {
        try {
            await LordMongoModel.deleteOne({uuid})

            return true
        } catch(err) {
            throw new Error('An error occurred while trying to remove a lord')
        }
    }

    
}