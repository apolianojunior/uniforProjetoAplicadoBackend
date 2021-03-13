const Sequelize = require("sequelize")
const connection = require("../../Config/dataBaseConfig")

const Restaurant = connection.define("RESTAURANT", {
    name: {
        type: Sequelize.STRING
    },
    CNPJ: {
        type: Sequelize.STRING
    },
    Adress: {
        type: Sequelize.STRING
    }
})

// Restaurant.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

module.exports = Restaurant