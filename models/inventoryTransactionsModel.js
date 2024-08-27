const { Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class InventoryTransaction extends Model { }

InventoryTransaction.init({

    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El ID es obligatorio',
            },
            isInt: {
                msg: 'El ID debe ser un número entero',
            },
        },
    },
    transaction_type: {
        type: DataTypes.TINYINT.UNSIGNED,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El tipo de transacción es obligatorio',
            },
            isInt: {
                msg: 'El tipo de transacción debe ser un número entero',
            },
        },
    },
    transaction_created_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: 'La fecha de creación debe ser una fecha válida',
            },
        },
    },
    transaction_modified_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: 'La fecha de modificación debe ser una fecha válida',
            },
        },
    },
    product_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El ID del producto es obligatorio',
            },
            isInt: {
                msg: 'El ID del producto debe ser un número entero',
            },
        },
    },
    quantity: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'La cantidad es obligatoria',
            },
            isInt: {
                msg: 'La cantidad debe ser un número entero',
            },
        },
    },
    purchase_order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        validate: {
            isInt: {
                msg: 'El ID de la orden de compra debe ser un número entero',
            },
        },
    },
    customer_order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        validate: {
            isInt: {
                msg: 'El ID de la orden del cliente debe ser un número entero',
            },
        },
    },
    comments: {
        type: DataTypes.STRING(255),
        allowNull: true,
        validate: {
            len: {
                args: [0, 255],
                msg: 'Los comentarios no deben exceder los 255 caracteres',
            },
        },
    },
}, {
    sequelize,
    modelName: 'InventoryTransaction',
    tableName: 'inventory_transactions',
    indexes: [
        {
            fields: ['customer_order_id'],
        },
        {
            fields: ['product_id'],
        },
        {
            fields: ['purchase_order_id'],
        },
        {
            fields: ['transaction_type'],
        },
    ],
    timestamps: false,
});
  


module.exports = InventoryTransaction;