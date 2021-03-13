const Sequelize = require("sequelize")
const connection = require("../../Config/dataBaseConfig")
const Restaurant = require("../Restaurant/Restaurant")

const Menu = connection.define("MENU", {
    description: {
        type: Sequelize.TEXT
    }
})

Restaurant.hasOne(Menu)
Menu.belongsTo(Restaurant)

//Menu.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

module.exports = Menu