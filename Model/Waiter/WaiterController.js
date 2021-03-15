const Waiter = require("./Waiter")
const Crud = require("../Crud/CrudController");

class WaiterController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const waiterController = new WaiterController( Waiter )
module.exports = waiterController