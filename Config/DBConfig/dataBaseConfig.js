import Sequelize from "sequelize"

const connection = new Sequelize('selfMenu', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
})

export default connection