import Waiter from "./Waiter.js";
import Crud from "../Crud/CrudController.js";

class WaiterController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const waiterController = new WaiterController( Waiter )

export default waiterController