const Sequelize = require("sequelize")
const connection = require("../../Config/dataBaseConfig")
const Table = require("../Table/Table")

const Customer = connection.define("CUSTOMER", {
    name: {
        type: Sequelize.STRING
    }
})

Customer.belongsTo(Table)
Table.hasOne(Customer)

// Customer.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

module.exports = Customer