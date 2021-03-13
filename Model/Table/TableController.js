const express = require("express")
const router = express.Router()
const Table = require("./Table")

router.get("/table", (req, res) => {
    return res.json(Table.findAll())
})

router.get("/table/:id", (req, res) => {
    
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)

        let table = Table.find( c => c.id == id)

        if(!table) {
            return res.sendStatus(404)
        }
        res.statusCode = 200
        return res.json(table)
    }
})

module.exports = router