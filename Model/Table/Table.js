const Sequelize = require("sequelize")
const connection = require("../../Config/dataBaseConfig")
const Waiter = require("../Waiter/Waiter")

const Table = connection.define('TABLE', {
    number: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Table.belongsTo(Waiter)
Waiter.hasOne(Table)

// Table.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

module.exports = Table