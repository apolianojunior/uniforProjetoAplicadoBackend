const express = require("express");
const Router = express.Router();

const CustomerController = require("./Model/Customer/CustomerController")
const MenuController = require("./Model/Menu/MenuController")
const OrdersController = require("./Model/Orders/OrdersController")
const ProductController = require("./Model/Product/ProductController")
const RestaurantController = require("./Model/Restaurant/RestaurantController")
const TableController = require("./Model/Table/TableController")
const WaiterController = require("./Model/Waiter/WaiterController")

//Waiter Controller
Router.get("/Waiter/:params?", WaiterController.search.bind(WaiterController));
Router.post("/Waiter", WaiterController.save.bind(WaiterController));
Router.put("/Waiter", WaiterController.update.bind(WaiterController));
Router.delete("Waiter/:params?", WaiterController.remove.bind(WaiterController));

//Table Controller
Router.get("/Table/:params?", TableController.search.bind(TableController));
Router.post("/Table", TableController.save.bind(TableController));
Router.put("/Table", TableController.update.bind(TableController));
Router.delete("Table/:params?", TableController.remove.bind(TableController));

//Restaurant Controller
Router.get("/Restaurant/:params?", RestaurantController.search.bind(RestaurantController));
Router.post("/Restaurant", RestaurantController.save.bind(RestaurantController));
Router.put("/Restaurant", RestaurantController.update.bind(RestaurantController));
Router.delete("Restaurant/:params?", RestaurantController.remove.bind(RestaurantController));

//Product Controller
Router.get("/Product/:params?", ProductController.search.bind(ProductController));
Router.post("/Product", ProductController.save.bind(ProductController));
Router.put("/Product", ProductController.update.bind(ProductController));
Router.delete("Product/:params?", ProductController.remove.bind(ProductController));

//Orders Controller
Router.get("/Orders/:params?", OrdersController.search.bind(OrdersController));
Router.post("/Orders", OrdersController.save.bind(OrdersController));
Router.put("/Orders", OrdersController.update.bind(OrdersController));
Router.delete("Orders/:params?", OrdersController.remove.bind(OrdersController));

//Menu Controller
Router.get("/Menu/:params?", MenuController.search.bind(MenuController));
Router.post("/Menu", MenuController.save.bind(MenuController));
Router.put("/Menu", MenuController.update.bind(MenuController));
Router.delete("Menu/:params?", MenuController.remove.bind(MenuController));

//Costumer Controller
Router.get("/Costumer/:params?", CustomerController.search.bind(CustomerController));
Router.post("/Costumer", CustomerController.save.bind(CustomerController));
Router.put("/Costumer", CustomerController.update.bind(CustomerController));
Router.delete("Costumer/:params?", CustomerController.remove.bind(CustomerController));

module.exports = Router