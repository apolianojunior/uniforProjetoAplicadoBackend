const Customer = require("./Customer");
const Crud = require("../Crud/CrudController");

class CustomerController extends Crud {
    constructor( entity ) {
        super( entity )
    }
}

const customerController = new CustomerController( Customer )
module.exports = customerController