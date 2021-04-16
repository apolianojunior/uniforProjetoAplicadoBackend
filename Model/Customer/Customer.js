import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"
import Table from "../Table/Table.js"

const Customer = connection.define("CUSTOMER", {
    name: {
        type: Sequelize.STRING
    }
})

Table.hasOne(Customer)
Customer.belongsTo(Table)

export default Customer