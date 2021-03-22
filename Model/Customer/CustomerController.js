import Customer from "./Customer.js";
import Crud from "../Crud/CrudController.js";

class CustomerController extends Crud {
    constructor( entity ) {
        super( entity )
    }
}

const customerController = new CustomerController( Customer )

export default customerController