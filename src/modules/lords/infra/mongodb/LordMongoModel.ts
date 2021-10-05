import mongoose from 'mongoose'

export const LordMongoSchema = new mongoose.Schema({
    uuid: { type: String, required: [true, "It is necessary to fill in the field 'uuid'"] },
    name: { type: String, required: [true, "It is necessary to fill in the field 'name'"] },
    seasons: { type: Array, required: [true, "It is necessary to fill in the field 'seasons'"] }
})

export const LordMongoModel  = mongoose.model('Lord', LordMongoSchema);