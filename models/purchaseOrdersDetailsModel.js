
const{ Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class PurchaseOrderDetails extends Model {}

PurchaseOrderDetails.init ({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    purchaseOrderId: {
        type: DataTypes.INTEGER,
        allowNull:  false,
        references: {
            model: 'purchase_orders',
            key:'id',
        },
        validate: {
            notNull: {
                msg: 'El campo purchaseOrderId no puede ser nulo',
            },
            isInt:{
                msg: 'El campo purchaseOrderId debe ser un número entero.',
            },
        },
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        references:{
            model: 'products',
            key:'id',
        },
        validate: {
            isInt: {
                msg: 'El campo productId debe ser un número entero',
            },
        },
    },
    quantity: {
        type: DataTypes.DECIMAL(18, 4),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo quantity no puede ser nulo.'
            },
            isDecimal:{
                msg: 'El campo quantity debe ser un número decimal.'
            },
            min: {
                msg:'El campo quantity debe ser mayor o igual a 0.'
            },
        },
    },
    unitCost: {
        type: DataTypes.DECIMAL(18, 4),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo Unit Cost no puede ser nulo.'
            },
            isDecimal: {
                msg: 'El campo Unit Cost debe ser un número Decimal.'
            },
            min: {
                args: [0],
                msg: 'El campo Unit Cost debe ser mayor o igual a 0.'
            }
        }
    },
    dateReceived: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: 'Date Received debe ser una fecha válida.'
            },
        }
    },
    postedToInventory: {
        type: DataTypes.TINYINT(1),
        allowNull: true, //no acepta el campo nulo pero si tiene un valor por defecto
        defaultValue: 0, //entonces si deja el campo nulo le asignamos el cero por defecto.
        validate:{
            isIn: { //si esta entre estos dos valores
                args: [[true, false]],
                msg: 'El campo posted to inventory debe ser verdadero o falso',
            }
        }
    },
    inventoryId: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: {
            isInt: {
                msg: 'El campo inventoryId debe ser un número entero'
            },
        }
    }
},{
    sequelize,
    modelName: 'PurchaseOrderDetails',
    tableName: 'purchase_order_details',
    timestamps: false,
});

module.exports = PurchaseOrderDetails;


