import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"
import Waiter from "../Waiter/Waiter.js"

const Table = connection.define('TABLE', {
    number: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Table.belongsTo(Waiter)
Waiter.hasOne(Table)

export default Table