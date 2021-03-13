const Sequelize = require("sequelize")
const connection = require("../../Config/dataBaseConfig")
const Product = require("../Product/Product")
const Waiter = require("../Waiter/Waiter")
const Customer = require("../Customer/Customer")
const Table = require("../Table/Table")

const Orders = connection.define("ORDERS", {
    quantity: {
        type: Sequelize.INTEGER
    }
})

Orders.belongsTo(Product)
Orders.belongsTo(Waiter)
Orders.belongsTo(Customer)
Orders.belongsTo(Table)
Product.hasOne(Customer)
Waiter.hasOne(Customer)
Customer.hasOne(Customer)
Table.hasOne(Customer)


// Orders.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

module.exports = Orders