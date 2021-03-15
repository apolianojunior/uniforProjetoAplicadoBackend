const Restaurant = require("./Restaurant")
const Crud = require("../Crud/CrudController");

class RestaurantController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const restaurantController = new RestaurantController( Restaurant )
module.exports = restaurantController