const express = require("express");
const Orders = require("./Orders");
const router = express.Router();

router.get("/orders", (req, res) => {
    return res.json(Orders.findAll())      
})

router.get("/orders/:id", (req, res) => {
    
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)

        let orders = Orders.find( c => c.id == id)

        if(!orders) {
            return res.sendStatus(404)
        }
        res.statusCode = 200
        return res.json(orders)
    }
})


module.exports = router