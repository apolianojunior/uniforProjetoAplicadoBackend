const Orders = require("./Orders");
const Crud = require("../Crud/CrudController");

class OrdersController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const ordersController = new OrdersController( Orders )
module.exports = ordersController