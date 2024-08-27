const express = require("express");
const router = express.Router();

//Importamos todas las rutas de las entidades
const customersRoutes = require('./customersRoutes');
const purchaseOrderRoutes = require('./purchaseOrdersRoutes');
const productsRoutes = require('./productsRoutes');
//const employeesRoutes = require('./employeesRoutes');
//const ordersRoutes = require('./ordersRoutes');
//const ordersStatusRoutes = require('./ordersStatusRoutes');
//const orderTaxStatusRoutes = require('./orderTaxStatusRoutes');
//const shipperRoutes = require('./shipperRoutes');
//const suppliersRoutes = require('./suppliersRoutes');

//usamos las rutas importadas
router.use('/purchase-orders',purchaseOrderRoutes);
router.use('/customers', customersRoutes);
router.use('products', productsRoutes);




module.exports = router;
