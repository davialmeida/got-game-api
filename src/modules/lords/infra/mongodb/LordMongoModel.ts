import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export const LordMongoSchema = new Schema({
    'uuid': {
        type: 'string',
        required: [true, "It is necessary to fill in the field 'uuid'"]
    },
    'name': {
        type: String,
        required: [true, "It is necessary to fill in the field 'name'"]
    },
    'seasons': {
        type: Array,
    },
})

export const LordMongoModel  = mongoose.model('Lord', LordMongoSchema);