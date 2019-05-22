const Kid = require('../models/Kid.js')

const kidController = {
    index: async (req, res) => {
        try {
            const kids = await Kid.find()
            res.json(kids)
        } catch (err) {
            console.log(err)
        }
    },
    show: async (req, res) => {
        try {
            const id = req.params.id
            const Kid = await Kid.findById(id)
            res.send(Kid)
        } catch (err) {
            console.log(err)
            res.json(err)
        }
    },
    create: async (req, res) => {
        try {
          const newkid = req.body
          console.log(newkid)
          const savedkid = await Kid.create(newkid)
          res.json(savedkid)
        } 
        catch (err) {
          console.log(err)
          res.status(500).send(err)
        }
    },
    update: async (req, res) => {
        try {
          const id = req.params.id
          const updatedkid = req.body
          const savedkid = await Kid.findByIdAndUpdate(id, updatedkid, {new: true})
          res.send(savedkid)
        }
        catch (err) {
          console.log(err)
          res.status(500).send(err)
        }
    },
    delete: async (req, res) => {
        console.log('DELETE')
        try {
          const id = req.params.id
          const deletedkid = await Kid.findByIdAndRemove(id)
          res.send(deletedkid)
        }
        catch (err) {
          console.log(err)
          res.status(500).send(err)
        }
    }
}

module.exports = kidController