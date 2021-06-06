import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"

const User = connection.define("USER", {
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        notEmpty: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.DataTypes.STRING(64),
        is: /^[0-9a-f]{64}$/i,
        allowNull: false,
        notEmpty: true
    }
})

export default User