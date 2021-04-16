import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"
import Product from "../Product/Product.js"
import Restaurant from "../Restaurant/Restaurant.js"

const Menu = connection.define("MENU", {
    description: {
        type: Sequelize.TEXT
    }
})

Menu.hasOne(Product)
Product.belongsTo(Menu)
Restaurant.hasOne(Menu)
Menu.belongsTo(Restaurant)

export default Menu