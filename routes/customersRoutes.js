
const express = require("express")

//controladores
const customerController = require ("../controllers/customersController.js")

//configuracion de rutas express, metodos HTTP

const router = express.Router();

router.get("/", customerController.getCustomers);
router.get("/:id",customerController.getCustomerById);
router.post("/", customerController.createCustomer);
router.put("/:id", customerController.updateCustomer);
router.delete("/:id", customerController.deleteCustomer);

module.exports = router;