import Restaurant from "./Restaurant.js";
import Crud from "../Crud/CrudController.js";

class RestaurantController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const restaurantController = new RestaurantController( Restaurant )

export default restaurantController