const Menu = require("./Menu");
const Crud = require("../Crud/CrudController");

class MenuController extends Crud{
    
    constructor( entity ) {
        super( entity )
    }

}

const menuController = new MenuController( Menu )
module.exports = menuController