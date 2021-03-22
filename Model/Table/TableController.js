import Table from "./Table.js";
import Crud from "../Crud/CrudController.js";

class TableController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const tableController = new TableController( Table )

export default tableController