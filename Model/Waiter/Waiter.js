const Sequelize = require("sequelize")
const connection = require("../../Config/dataBaseConfig")

const Waiter = connection.define('WAITER', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

}) 

// Waiter.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

module.exports = Waiter