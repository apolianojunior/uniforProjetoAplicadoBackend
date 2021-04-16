import Category from "./Category.js";
import Crud from "../Crud/CrudController.js";

class CategoryController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const categoryController = new CategoryController( Category )

export default categoryController