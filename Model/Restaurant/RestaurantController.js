const express = require("express")
const router = express.Router();
const Restaurant = require("./Restaurant")

router.get("/restaurant", (req, res) => {
    return res.json(Restaurant.findAll())
})

router.get("/restaurant/:id", (req, res) => {
    
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)

        let restaurant = Restaurant.find( c => c.id == id)

        if(!restaurant) {
            return res.sendStatus(404)
        }
        res.statusCode = 200
        return res.json(restaurant)
    }
})

module.exports = router