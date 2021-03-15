const Product = require("./Product");
const Crud = require("../Crud/CrudController");

class ProductController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const productController = new ProductController( Product )
module.exports = productController