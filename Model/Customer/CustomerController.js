const express = require("express");
const Customer = require("./Customer");
const router = express.Router();

router.get("/costumer", (req, res) => {
    return res.json(Customer.findAll())     
})

router.get("/costumer/:id", (req, res) => {
    
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)

        let customer = Customer.find( c => c.id == id)

        if(!customer) {
            return res.sendStatus(404)
        }
        res.statusCode = 200
        return res.json(customer)
    }
})


module.exports = router