const { Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class Product extends Model {}

Product.init( {

id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    validate: {
        notNull: {
            msg: 'El id no puede ser nulo.'
        },
        isInt: {
            args: [0],
            msg: 'El id debe ser un número entero mayor que cero.' //si es autoincremental no seria necesario
        },
    },
},
supplier_ids: {
    type: DataTypes.TEXT,
    allowNull: true,
    defaultValue: null,
    validate: {
        isStringArray(value) {
            if(value && !Array.isArray(JSON.parse(value))) {
                throw new Error('Supplir_ids deber ser una cadena que represente un array.');
            }
        }
    }
},
product_code: {
    type: DataTypes.STRING(25),
    allowNull: true,
    validate: {
        len: {
            args: [0, 25],
            msg: 'El campo product_code no debe exceder 25 caracteres.',
        },
    },
},
product_name: {
    type: DataTypes.STRING(50),
    allowNull: true,
    validate: {
        len: {
            args: [0, 50],
            msg: 'El campo product_name no debe exceder 50 caracteres.',
        },
    }
},
description: {
    type: DataTypes.TEXT,
    allowNull: true,
},
standard_cost: {
    type: DataTypes.DECIMAL(19,4),
    defaultValue: 0.0000,
    allowNull: false, //si tiene default value deberia admitir nulos
    validate: {
        isDecimal: {
            msg: 'El campo standard cost debe ser un número decimal.',
        },
        min: {
            args: [0],
            msg: 'El campo standard_cost debe ser mayor o igual a 0.'
        },
    },
},
list_price: {
    type: DataTypes.DECIMAL(19,4),
    defaultValue: 0.0000,
    allowNull: false, //si tiene default value deberia admitir nulos
    validate: {
        isDecimal: {
            msg: 'El campo list_price debe ser un número decimal.',
        },
        min: {
            args: [0],
            msg: 'El campo list_price debe ser mayor o igual a 0.'
        },
    },
},
reoder_level: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
        isInt: {
            msg: 'El campo reorder level debe ser un entereo válido.'
        }
    }
},
target_level: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
        isInt: {
            msg: 'El campo target level debe ser un entereo válido.'
        }
    }
},
quantity_per_unit: {
    type: DataTypes.STRING(50),
    allowNull: true,
    defaultValue: null,
    validate: {
        len: {
            args: [0, 50],
            msg: 'El campo quantity per unit no debe superar los 50 caracteres.'
        }
    }
},
discontinued: {
    type: DataTypes.TINYINT(1),
    allowNull: false,
    defaultValue: 0,
    validate: {
        isIn: {
            args:[0, 1],
            msg: 'El campo discontinued debe ser 0 o 1.'
        }
    }
},
minimum_reorder_quantity: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: null,
    validate: {
        isInt: {
            msg: 'El campo minimum_reorder_quantity debe ser un entero.'
        }
    }
},
category: {
    type: DataTypes.STRING(50),
    defaultValue: null,
    allowNull: true,
    validate: {
        len:{
            args: [0, 50],
            msg:'El campo category no debe superar los 50 caracteres.'
        }
    }
},
attachments: {
    type: DataTypes.BLOB,
    allowNull: true
}
},{
    sequelize,
    modelName: 'Product',
    tableName: 'products',
    timestamps: false
});

module.exports = Product;





