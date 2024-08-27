const { Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class OrderTaxStatus extends Model {}

OrderTaxStatus.init({
    id: {
        type: DataTypes.TINYINT,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        validate: {
            isInt: {
                msg: 'El id debe ser un entero válido.'
            },
            notNull: {
                msg: 'El campo id no puede ser nulo.'
            },
            min: {
                args: [1],
                msg: 'El valor de id debe ser mayor o igual a 1.'
            }

        }
    },
    tax_status_name: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: {
            notNull: {
                msg: ' El campo tax status name no puede ser nulo.'
            },
            len: {
                args: [1, 50],
                msg: 'El campo taxt status name debe tener entre 1 y 50 caracteres.'
            },
            notEmpty: {
                msg: 'El campo tax status name no puede estar vacío.'
            }
        }
    }
}, {

    sequelize,
    tableName: 'taxt_status_name',
    modelName: 'OrderTaxStatus',
    timestamps: false
});

module.exports = OrderTaxStatus;