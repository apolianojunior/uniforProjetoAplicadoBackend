import Sequelize from "sequelize"
import connection from "../../Config/DBConfig/dataBaseConfig.js"

const Feedback = connection.define("FEEDBACK", {
    userName: {
        type: Sequelize.STRING
    },
    title: {
        type: Sequelize.STRING
    },
    rate: {
        type: Sequelize.INTEGER
    },
    description: {
        type: Sequelize.STRING
    }
})

export default Feedback