const express = require("express")

//controladores
const {getCustomerById,getCustomers, createCustomer,
    updateCustomer, deleteCustomer} = require ("../controllers/customersController.js")

//configuracion de rutas express, metodos HTTP

const route = express.Router();

route.get("/", getCustomers);
route.get("/:id", getCustomerById);
route.post("/", createCustomer);
route.put("/:id", updateCustomer);
route.delete("/:id", deleteCustomer);



module.exports = route;