const express = require("express")
const router = express.Router()
const Waiter = require("./Waiter")

router.get("/waiter", async (req, res) => {
    return res.json(await Waiter.findAll())
})

router.get("/waiter/:id", async (req, res) => {
    if(isNaN(req.params.id)){
        res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)

        let waiter = await Waiter.findAll({where: {id: id}})

        if(!waiter) {
            res.sendStatus(404)
        }
        
        return res.status(200).json(waiter)
    }
})

router.post("/waiter", async (req, res) => {
    let {name} = req.body

    const waiter = Waiter.build({ name: name })
    waiter.save()
    res.sendStatus(200)
})

module.exports = router