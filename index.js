import express from "express"
import connection from "./Config/DBConfig/dataBaseConfig.js"
import routes from "./routes.js"
import Waiter from "./Model/Waiter/Waiter.js"
import Customer from "./Model/Customer/Customer.js"
import Menu from "./Model/Menu/Menu.js"
import Orders from "./Model/Orders/Orders.js"
import Product from "./Model/Product/Product.js"
import Restaurant from "./Model/Restaurant/Restaurant.js"
import Table from "./Model/Table/Table.js"

const app = express()

connection.query("set FOREIGN_KEY_CHECKS=0")
connection.authenticate().then( () => {
    console.log("Banco Ok!")
}).catch( (msgError) => {
    console.log(msgError)
})

app.use(express.json())
app.use("/", routes)

app.listen(8080, () => {
    console.log("Servidor iniciado com sucesso!")
})