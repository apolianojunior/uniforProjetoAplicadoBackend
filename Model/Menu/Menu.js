import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"
import Restaurant from "../Restaurant/Restaurant.js"

const Menu = connection.define("MENU", {
    description: {
        type: Sequelize.TEXT
    }
})

Restaurant.hasOne(Menu)
Menu.belongsTo(Restaurant)

//Menu.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

export default Menu