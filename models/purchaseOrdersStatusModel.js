const { Model, DataTypes } = require("sequelize");
const sequelize = require('../data/db.js');

class PurchaseOrderStatus extends Model {}

PurchaseOrderStatus.init({

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false, //no se autoincrementa. Asi esta en el SQL
        validate: {
            notNull: {
                msg: 'El campo id no puede ser nulo.'
            },
            isInt: {
                msg: 'El campo id debe ser un número entero'
            }
        }
    },
    status: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El campo status no puede exceder los 50 caracteres.',
            }
        }

    }

}, {
    sequelize,
    modelName: 'PurchaseOrderStatus',
    tableName: 'purchase_order_status',
    timestamps: false
});

module.exports = PurchaseOrderStatus;





