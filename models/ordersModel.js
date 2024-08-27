
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js'); //debe apuntar a la instancia de sequelize

const Employee = require("../models/employeesModel.js");

class Orders extends Model{}

Orders.init({

    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Employee', //Nombre de  la tabla referenciada
            key: 'id',
        },
        field: 'employee_id',
    },
    customer_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'Cusomers', //Nombre de la tabla referenciada
            key: 'id',
        },
        field:'customer_id',
    },
    orderDate: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: "Must be a valid date"
            },
        },
    },
    shipped_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate:{
                msg: "shipped date must be a valid date"
            },
        },
    },
    shipper_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Shippers',
            key: 'id',
        },
        field: 'shipper_id',
    },
    ship_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
       field:'ship_name',
    },
    ship_address: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'ship_address',
    },
    ship_city: {
        type:DataTypes.STRING(50),
        allowNull: true,
        field: 'ship_city'
    },
    ship_state_province: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'ship_state_province',
    },
    ship_zip_postal_code: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'ship_zip_postal_code',
    },
    ship_country_region: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field:'ship_country_region',
    },
    shipping_fee: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: true,
        field: 'shipping_fee',
        defaultValue: 0.0000,
        validate:{
            isDecimal:{
                msg: "La tarifa de envio debe ser un número decimal válido",
            },
        },
    },
    taxes:{
        type: DataTypes.DECIMAL(19, 4),
        allowNull: true,
        defaultValue: 0.0000,
        validate:{
            isDecimal:{
                msg: "Los impuestos deben ser un número decimal válido.",
            },
        },
    },
    payment_type: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field:'payment_type',
    },
    paid_date: {
        type: DataTypes.DATE,
        allowNull: true,
        field: 'paid_date',
        validate: {
            isDate: {
                msg: "Must be a valid date"
            },
        },
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    taxt_rate: {
        type: DataTypes.DOUBLE,
        allowNull: true,
        defaultValue: 0,
        field: 'taxt_rate',
        validate:{
            isFloat:{
                msg:"La tasa de impuestos debe ser un número válido.",
            },
        },
    },
    tax_status_id: {
        type: DataTypes.TINYINT,
        allowNull: true,
        field:'tax_status_id',
        references: {
            model: 'OrdersTaxStatus', //Nombre de la tabla referenciada (en el model creo)
            key: 'id',
        },
        field:'tax_status_id',
    },
    status_id: {
        type: DataTypes.TINYINT,
        allowNull: true,
        defaultValue: 0,
        references: {
            model: 'OrdersStatus', //Nombre de la tabla referenciada (en el model creo)
            key: 'id',
        },
        field: 'status_id',
    }
}, {
    sequelize,
    modelName: 'Orders',
    tableName: 'orders',
    timestamps: false, //desactiva createdAt y updatedAt si no los tienes en la tabla
    underscored: true, //si los nombres de las columnas en la BD son snake_case
});

//aca se pueden crear las relaciones entre las tablas si no es en un archivo aparte
//Order.belongsTo(Employee, {foreignKey: 'employee_id' });
//relacionar con las otras tablas



module.exports = Orders;


