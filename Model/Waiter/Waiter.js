import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"

const Waiter = connection.define('WAITER', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

}) 

export default Waiter