import { Router } from "express"
import CustomerController from "./Model/Customer/CustomerController.js";
import MenuController from "./Model/Menu/MenuController.js";
import OrdersController from "./Model/Orders/OrdersController.js";
import ProductController from "./Model/Product/ProductController.js";
import RestaurantController from "./Model/Restaurant/RestaurantController.js";
import TableController from "./Model/Table/TableController.js";
import WaiterController from "./Model/Waiter/WaiterController.js";

const routes = Router()

//Waiter Controller
routes.get("/Waiter", WaiterController.search.bind(WaiterController));
routes.post("/Waiter",WaiterController.save.bind(WaiterController));
routes.put("/Waiter", WaiterController.update.bind(WaiterController));
routes.delete("Waiter", WaiterController.remove.bind(WaiterController));
routes.get("/Waiter/form/:id?", WaiterController.prepareForm.bind(WaiterController));

//Table Controller
routes.get("/Table/:params?", TableController.search.bind(TableController));
routes.post("/Table", TableController.save.bind(TableController));
routes.put("/Table", TableController.update.bind(TableController));
routes.delete("Table/:params?", TableController.remove.bind(TableController));

//Restaurant Controller
routes.get("/Restaurant/:params?", RestaurantController.search.bind(RestaurantController));
routes.post("/Restaurant", RestaurantController.save.bind(RestaurantController));
routes.put("/Restaurant", RestaurantController.update.bind(RestaurantController));
routes.delete("Restaurant/:params?", RestaurantController.remove.bind(RestaurantController));

//Product Controller
routes.get("/Product/:params?", ProductController.search.bind(ProductController));
routes.post("/Product", ProductController.save.bind(ProductController));
routes.put("/Product", ProductController.update.bind(ProductController));
routes.delete("Product/:params?", ProductController.remove.bind(ProductController));

//Orders Controller
routes.get("/Orders/:params?", OrdersController.search.bind(OrdersController));
routes.post("/Orders", OrdersController.save.bind(OrdersController));
routes.put("/Orders", OrdersController.update.bind(OrdersController));
routes.delete("Orders/:params?", OrdersController.remove.bind(OrdersController));

//Menu Controller
routes.get("/Menu/:params?", MenuController.search.bind(MenuController));
routes.post("/Menu", MenuController.save.bind(MenuController));
routes.put("/Menu", MenuController.update.bind(MenuController));
routes.delete("Menu/:params?", MenuController.remove.bind(MenuController));

//Costumer Controller
routes.get("/Costumer/:params?", CustomerController.search.bind(CustomerController));
routes.post("/Costumer", CustomerController.save.bind(CustomerController));
routes.put("/Costumer", CustomerController.update.bind(CustomerController));
routes.delete("Costumer/:params?", CustomerController.remove.bind(CustomerController));

export default routes