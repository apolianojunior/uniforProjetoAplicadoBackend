const express = require("express");
const Product = require("./Product");
const router = express.Router();

router.get("/product", async (req, res) => {
    return res.json(await Product.findAll())    
})

router.get("/product/:id", async (req, res) => {
    
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)

        let product = Product.find( c => c.id == id)

        if(!product) {
            return res.sendStatus(404)
        }
        res.statusCode = 200
        return res.json(product)
    }
})

router.post("/product", async (req, res) => {
    let {name, description, picture, price, rating } = req.body

    const waiter = Waiter.build({ name: name, description: description, picture: picture, price: price, rating: rating })
    waiter.save()
    res.sendStatus(200)
})


module.exports = router