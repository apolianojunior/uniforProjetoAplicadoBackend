import Orders from "./Orders.js"
import Crud from "../Crud/CrudController.js"

class OrdersController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const ordersController = new OrdersController( Orders )

export default ordersController