const Table = require("./Table")
const Crud = require("../Crud/CrudController");

class TableController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const tableController = new TableController( Table )
module.exports = tableController