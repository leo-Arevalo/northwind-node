const { Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class OrderDetails extends Model {}

OrderDetails.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo id no puede ser nulo.'
            },
            isInt: {
                msg: 'El campo id debe ser un número entero.'
            },
            min: {
                args: [0],
                msg: 'El id debe ser un entero mayor que cero.',
            }
        }
    },
    order_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'El campo order id no puede ser nulo.'
            },
            min: {
                args: [0],
                msg: 'El campo order id debe ser un entero mayor que cero.',
            }
        }
    },
    product_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
            isInt: {
                msg: 'El product id debe ser un número entero.',
            }
        }
    },
quantity: {
    type: DataTypes.DECIMAL(18.4),
    allowNull: false,
    defaultValue: 0.0000,
    validate: {
        isDecimal:{
            msg: "El campo quantity debe ser un número decimal",
        },
        min: {
            args: [0],
            msg: 'El campo quantity debe ser mayor o igual a 0.',
        }
    }
},
unit_price: {
    type: DataTypes.DECIMAL(19.4),
    allowNull: true,
    defaultValue: 0.0000,
    validate: {
        isDecimal:{
            msg: "El campo unit price debe ser un número decimal.",
        },
        min: {
            args: [0],
            msg: 'El campo unit price debe ser mayor o igual a 0.',
        }
    }
},
discount: {
    type: DataTypes.DOUBLE,
    allowNull: false,
    defaultValue: 0,
    validate: {
        isDecimal: {
            msg: 'El campo discount debe ser un número decimal.'
        },
        min: {
            args: [0],
            msg: 'El campo discount debe ser mayor o igual a 0.'
        }
    }
},
status_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
        isInt: {
            msg: 'El campo status_id debe ser un número entero.',
        },
    },
},
date_allocated: {
    type: DataTypes.DATE,
    allowNull: true,
    validate: {
        isDate: {
            msg: 'El campo date_allocated debe ser una fecha válida.',
        },
    },
},
purchase_order_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
        isInt: {
            msg: 'El campo purchase_order_id debe ser un número entero.',
        },
    },
},
inventory_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
        isInt: {
            msg: 'El campo inventory_id debe ser un número entero.',
        },
    },
},


},{
    sequelize,
    tableName: 'order_details',
    modelName: 'OrderDetails',
    timestamps: false,
    indexes: [
        {fields: ['id'] },
        {fields: ['inventory_id'] },
        {fields: ['product_id'] },
        {fields: ['purchase_order_id'] },
        {fields: ['order_id'] },
        {fields: ['status_id'] }
    ]
});

module.exports = OrderDetails;







