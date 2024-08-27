const { Model , DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class OrderDetailsStatus extends Model {}

OrderDetailsStatus.init ({

    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        validate: {
            notNull: {
                msg: 'El id no puede ser nulo.'
            },
            isInt: {
                msg: 'El campo id debe ser un entero válido.'
            },
            min: {
                args: [1],
                msg: 'El id debe ser mayor o igual a 1.'
            },
        }
    },
    status_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El status name no puede ser nulo.'
            },
            len: {
                args: [1, 50],
                msg: 'El status name no puede superar los 50 caracteres.'
            }
        }
    }

}, {
    sequelize,
    modelName: 'OrderDetailsStatus',
    tableName: 'order_details_status',
    timestamps: false
})

module.exports = OrderDetailsStatus;