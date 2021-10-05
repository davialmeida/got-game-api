import { LordMongoSchema } from '@modules/lords/infra/mongodb/LordMongoModel';
import mongoose from 'mongoose'

export const HouseMongoSchema = new mongoose.Schema({
    uuid: { 
        type: String, 
        required: [true, "It is necessary to fill in the field 'uuid'"] 
    },
    name: {
        type: String,
        required: [true, "It is necessary to fill in the field 'name'"]
    },
    region: {
        type: String,
        required: [true, "It is necessary to fill in the field 'region'"]
    },
    foundation_year: {
        type: String,
        default: null
    },
    current_lord: {
        type: LordMongoSchema,
        default: null
    }
})

export const HouseMongoModel  = mongoose.model('House', HouseMongoSchema);