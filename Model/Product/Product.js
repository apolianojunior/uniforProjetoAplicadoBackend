const Sequelize = require("sequelize")
const connection = require("../../Config/dataBaseConfig")

const Product = connection.define("PRODUCT", {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
    },
    picture: {
        type: Sequelize.TEXT,
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    rating: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

// Product.sync({force: true}) //Força um update no banco sempre que o sistema reiniciar

module.exports = Product