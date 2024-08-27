const { Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class Invoce extends Model { }

Invoce.init({
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
    order_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: true,
        validate: {
            isInt: {
                msg: 'El ID de la orden debe ser un número entero',
            },
        },
    },
    invoice_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: 'La fecha de la factura debe ser una fecha válida',
            },
        },
    },
    due_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: 'La fecha de vencimiento debe ser una fecha válida',
            },
        },
    },
    tax: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: true,
        defaultValue: 0.0000,
        validate: {
            isDecimal: {
                msg: 'El impuesto debe ser un número decimal',
            },
        },
    },
    shipping: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: true,
        defaultValue: 0.0000,
        validate: {
            isDecimal: {
                msg: 'El costo de envío debe ser un número decimal',
            },
        },
    },
    amount_due: {
        type: DataTypes.DECIMAL(19, 4),
        allowNull: true,
        defaultValue: 0.0000,
        validate: {
            isDecimal: {
                msg: 'El monto adeudado debe ser un número decimal',
            },
        },
    },
}, {
    sequelize,
    modelName: 'Invoices',
    tableName: 'invoices',
    indexes: [
        {
            fields: ['order_id'],
        },
    ],
    timestamps: false,
});

module.exports = Invoce;




