import mongoose from "mongoose"

export {
  Performer
}

const Schema = mongoose.Schema

const performerSchema = new Schema({
  name: {type: String, required: true, unique: true},
  born: Date
}, {
  timestamps: true
})

const Performer = mongoose.model('Performer', performerSchema)