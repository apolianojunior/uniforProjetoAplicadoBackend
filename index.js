const express = require("express")
const connection = require("./Config/dataBaseConfig")
const routes = require("./routes")
const promise = connection.query("set FOREIGN_KEY_CHECKS=0")
const Waiter = require("./Model/Waiter/Waiter")
const Customer = require("./Model/Customer/Customer")
const Menu = require("./Model/Menu/Menu")
const Orders = require("./Model/Orders/Orders")
const Product = require("./Model/Product/Product")
const Restaurant = require("./Model/Restaurant/Restaurant")
const Table = require("./Model/Table/Table")

const app = express()
app.use(express.json())

connection.authenticate().then( () => {
    console.log("Banco Ok!")
}).catch( (msgError) => {
    console.log(msgError)
})

app.use("/", routes)

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso!")
})