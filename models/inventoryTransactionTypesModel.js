const { Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class InventoryTransactionTypes extends Model { }

InventoryTransactionTypes.init({

    id: {
        type: DataTypes.TINYINT.UNSIGNED,
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
    type_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El nombre del tipo de transacción es obligatorio',
            },
            len: {
                args: [1, 50],
                msg: 'El nombre del tipo de transacción debe tener entre 1 y 50 caracteres',
            },
        },
    },
}, {
    sequelize,
    modelName: 'InventoryTransactionTypes',
    tableName: 'inventory_transaction_types',
    timestamps: false,
});

module.exports = InventoryTransactionTypes;





