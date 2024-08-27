
/*
hasMany: Uno a muchos
belongTo: Muchos a Uno
hasOne: uno a uno
belongsToMany: Muchos a muchos

*/

const Customers = require("./customersModel.js");
const Employees = require("./employeesModel.js");
const Shippers = require("./shipperModel.js");
const Orders = require("./ordersModel.js");
const OrderStatus = require("./orderStatusModel.js");
const OrderTaxStatus = require("./orderTaxStatusModel.js");
const OrderDetails = require("./orderDetailsModel.js");
const OrderDetailsStatus = require("./orderDetailsStatusModel");
const Products = require('./ProductModel');
const InventoryTransactions = require("./inventoryTransactionsModel");
const InventoryTransactionTypes = require("./inventoryTransactionTypesModel");
const Invoices = require("./invoicesModel");
const Suppliers = require("./suppliersModel");
const PurchaseOrders = require("./purchaseOrdersModel");
const PurchaseOrdersDetails = require("./purchaseOrdersDetailsModel");
const PurchaseOrderStatus = require("./purchaseOrdersStatusModel");
const Privileges = require("./privilegesModel");
const EmployeePrivileges = require("./employeesPrivilegesModel");


const defineAssociations = () => {

    //Orders Associations

    Orders.belongsTo(Customers, {foreignKey: 'customer_id' });
    Orders.belongsTo(Employees, {foreignKey: 'employee_id' });
    Orders.belongsTo(Shippers, {foreignKey: 'shipper_id' });
    Orders.belongsTo(OrderStatus, {foreignKey: 'status_id' });
    Orders.belongsTo(OrderTaxStatus, {foreignKey: 'tax_status_id' });
    Orders.hasMany(OrderDetails, {foreignKey: 'order_id' });
    Orders.hasMany(Invoices, {foreignKey: 'order_id' });

    //OrderDetails Associations

    OrderDetails.belongsTo(Orders, {foreignKey: 'order_id' });
    OrderDetails.belongsTo(Products, {foreignKey: 'product_id' });
    OrderDetails.belongsTo(OrderDetailsStatus, {foreignKey: 'status_id' });

    //Employees Associations
    Employees.hasMany(Orders, {foreignKey: 'employee_id' });
    Employees.hasMany(PurchaseOrders, {foreignKey: 'created_by', as: 'CreatedPurchaseOrders'});
    Employees.hasMany(PurchaseOrders, { foreignKey: 'submitted_by', as: 'SubmittedPurchaseOrders' });
    Employees.belongsToMany(Privileges, {through: EmployeePrivileges, foreignKey: 'employee_id'});

    //Products Associations
    Products.hasMany(OrderDetails, {foreignKey: 'producto_id' });
    //Products.belongsToMany(Suppliers, {through: 'product_suppliers', foreignKey: 'product_id' });


    //InventoryTransactions Associations

    InventoryTransactions.belongsTo(Orders, {foreignKey: 'order_id' });
    InventoryTransactions.belongsTo(OrderDetails, { foreignKey: 'order_detail_id' });
    InventoryTransactions.belongsTo(Products, {foreignKey: 'product_id' });
    InventoryTransactions.belongsTo(InventoryTransactionTypes, {foreignKey: 'transaction_type' });

    //Invoices Associations
    Invoices.belongsTo(Orders, {foreignKey: 'order_id' });

    //PurchaseOrders Associations
    PurchaseOrders.belongsTo(Employees, {foreignKey: 'created_by', as: 'Creator' });
    PurchaseOrders.belongsTo(Employees, {foreignKey: 'submitted_by', as: 'Submitter' });
    PurchaseOrders.belongsTo(Suppliers, {foreignKey: 'supplier_id' });
    PurchaseOrders.belongsTo(PurchaseOrderStatus, {foreignKey: 'status_id' });
    PurchaseOrders.hasMany(PurchaseOrdersDetails, {foreignKey: 'purchase_order_id' });

    //PurchaseOrderDetails Associations
    PurchaseOrdersDetails.belongsTo(Products, {foreignKey: 'product_id' });
    PurchaseOrdersDetails.belongsTo(PurchaseOrders, {foreignKey: 'purchase_order_id' });

    //Suppliers Associations
    Suppliers.hasMany(PurchaseOrders, {foreignKey: 'supplier_id' });
    //Suppliers.belongsToMany(Products, { through: 'ProductSuppliers', foreignKey: 'supplier_id' });

    //Invoices Associations
    Invoices.belongsTo(Orders, {foreignKey: 'order_id'});

    //Other Associations
    Privileges.belongsToMany(Employees, {through: EmployeePrivileges, foreignKey: 'privilege_id' });

};

module.exports = defineAssociations;
//module.exports = {Orders, Customers, Employees, Shippers, OrderStatus, OrderTaxStatus};





