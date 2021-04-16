import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"

const User = connection.define("USER", {
    name: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    password: {
        type: Sequelize.STRING
    }
})

export default User