import Product from "./Product.js";
import Crud from "../Crud/CrudController.js";

class ProductController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const productController = new ProductController( Product )

export default productController