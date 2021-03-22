import Menu from "./Menu.js";
import Crud from "../Crud/CrudController.js";

class MenuController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const menuController = new MenuController( Menu )

export default menuController