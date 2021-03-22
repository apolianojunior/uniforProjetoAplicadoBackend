import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"
import Table from "../Table/Table.js"

const Customer = connection.define("CUSTOMER", {
    name: {
        type: Sequelize.STRING
    }
})

Customer.belongsTo(Table)
Table.hasOne(Customer)

// Customer.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

export default Customer