const express = require("express");
const router = express.Router();
const PurchaseOrdersController = require("../controllers/purchaseOrdersController");

router.get('/', PurchaseOrdersController.getPurchaseOrders);
router.get('/:id', PurchaseOrdersController.getPurchaseOrderById);
router.post('/', PurchaseOrdersController.createPurchaseOrder);
router.put('/:id', PurchaseOrdersController.updatePurchaseOrder);
router.delete('/:id', PurchaseOrdersController.deletePurchaseOrder);

module.exports = router;
