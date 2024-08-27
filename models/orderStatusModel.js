
const { Model, DataTypes } = require('sequelize');
sequelize = require('../data/db.js');

class OrderStatus extends Model {}

OrderStatus.init ({

id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    allowNull: false,
    autoIncrement: false, //no tiene auto_increment
    validate: {
        isInt: {
            msg: 'el campo id debe ser un entero válido.'
        },
        notNull: {
            msg: 'El campo id no puede ser nulo.'
        },
        min: {
            args: [1],
            msg: 'El campo id no puede ser menor a 1.'
        }
    }
},
statusName: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
        len: {
            args: [1,50],
            msg: ' El campo status name no debe superar los 50 caracteres.'
        },
        notNull: {
            msg: 'El campo status name no puede ser nulo.'
        },
        notEmpty: {
            msg: 'El campo status name no puede estar vacío.'
        }
    }
}


}, {
    sequelize,
    tableName: 'orders_status',
    modelName: 'OrderStatus',
    timestamps: false, //no esta especificado en la tabla sql
});

module.exports = OrderStatus;










