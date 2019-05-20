const mongoose = require('../db/connection.js')

const creature = new mongoose.Schema({
    name: String,
    description: String
})

let creatureCollection = mongoose.model('Creature', creature)

const allCreatures = () => {
    return creatureCollection.find()
}
const newCreatures = (newCreat) => {
    return creatureCollection.create(newCreat)
}
const oneCreatures = (creat) => {
    return creatureCollection.findById(creat)
}
const updateCreatures = (creat, id) => {
    return creatureCollection.findOneAndUpdate(creat, id)
}
const deleteCreatures = (id) => {
    return creatureCollection.findByIdAndRemove(id)
}
module.exports ={
    allCreatures,
    newCreatures,
    oneCreatures,
    updateCreatures,
    deleteCreatures
}