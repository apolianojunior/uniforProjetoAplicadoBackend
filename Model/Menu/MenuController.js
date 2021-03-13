const express = require("express");
const Menu = require("./Menu");
const router = express.Router();

router.get("/menu", (req, res) => {
    return res.json(Menu.findAll())      
})

router.get("/menu/:id", (req, res) => {
    
    if(isNaN(req.params.id)){
        return res.sendStatus(400)
    } else {
        let id = parseInt(req.params.id)

        let menu = Menu.find( c => c.id == id)

        if(!menu) {
            return res.sendStatus(404)
        }
        res.statusCode = 200
        return res.json(menu)
    }
})


module.exports = router