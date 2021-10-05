import mongoose from "mongoose";
import { LordMongoSchema } from "@modules/lords/infra/mongodb/LordMongoModel";

const Schema = mongoose.Schema;

export const HouseModelMongo = new Schema({
    'uuid': {
        type: 'string',
        required: [true, "It is necessary to fill in the field 'uuid'"]
    },
    'name': {
        type: String,
        required: [true, "It is necessary to fill in the field 'name'"]
    },
    'region': {
        type: String,
        required: [true, "It is necessary to fill in the field 'region'"]
    },
    foundation_year: {type: String, required: false},
    current_lord: {type: LordMongoSchema, required: false, default : null}
})