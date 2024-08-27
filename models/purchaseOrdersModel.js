


/*
no confundir created_by y submitted_by que hacen referencia los dos a employees.
created_by:
 representa el empleado que creó la orden de compra
 Es el usuario que inicialmente registra la orden en el sistema, pero no necesariamente
 la envia para su procesamiento.

 submitted_by:
 Representa el empleado que envió (o autorizó) la orden de compra.
 Es quien revisa y aprueba la orden para que se procese oficialmente, y podría no ser el
 mismo que la creó.
*/

const {Model, DataTypes} = require("sequelize");
const sequelize = require("../data/db.js");
const { options } = require("./suppliersModel");

class PurchaseOrders extends Model {}
PurchaseOrders.init ({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    supplier_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Suppliers', // Nombre del modelo al que pertenece
            key: 'id'
        },
        validate: {
            isInt: {
                msg: "El campo ID del supplier debe ser un número entero."
            }
        }
    },
    created_by: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Employees',
            key: 'id'
        },
        validate: {
            isInt: {
                msg: "El campo ID del Empleado debe ser un número entero."
            }
        }
    },
    submitted_by:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: 'Employees',
            key: 'id'
        },
        validate: {
            isInt: {
                msg: "El campo 'Submitted By' debe ser un número entero."
            }
        }
    },
    status_id:{
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model:'PurchaseOrderStatus',
            key: 'id'
        },
        validate: {
            isInt: {
                msg: "El campo ID del Status debe ser un número entero."
            }
        }
    },
    submitted_date:{
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: "El campo Submitted debe ser una fecha válida."
            }
        }
    },
    creation_date: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        validate: {
            isDate: {
                msg: "El campo Creation debe ser una fecha válida."
            }
        }
    },
    expected_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: "El campo Expected Date debe ser una fecha válida."
            }
        }
    },
    shipping_fee: {
        type: DataTypes.DECIMAL(19,4),
        allowNull: true,
        defaultValue: 0.0000,
        validate: {
            isDecimal: {
                msg: "El campo Shipping Fee debe ser un número decimal válido."
            }
        }
    },
    taxes: {
        type:DataTypes.DECIMAL(19,4),
        allowNull: true,
        defaultValue: 0.0000,
        validate: {
            isDecimal: {
                msg: "El campo Taxes debe ser un número decimal válido."
            }
        }
    },
    payment_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg:"El campo Date of Payment debe ser una fecha válida."
            }
        }
    },
    payment_amount: {
        type: DataTypes.DECIMAL(19,4),
        allowNull: true,
        defaultValue: 0.0000,
        validate: {
            isDecimal: {
                msg: "El campo Payment Amount debe ser un número decimal válido."
            }
        }
    },
    payment_method: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: "El campo payment method no puede exceder los 50 caracteres."
            }
        }
    },
    notes: {
        type:DataTypes.TEXT,
        allowNull: true,
        validate: {
            len: {
                args: [0, 500],
                msg: "El campo Notes no puede exceder los 500 caracteres."
            }
        }
    },
    approved_date: {
        type: DataTypes.DATE,
        allowNull: true,
        validate: {
            isDate: {
                msg: "El campo Date of Approved debe ser una fecha válida."
            }
        }
    }

}, {
    sequelize,
    modelName: 'PurchaseOrders',
    tableName: 'purchase_orders',
    timestamps: false,
    hooks: {
        beforeValidate: (purchaseOrder, options) => {

            if(purchaseOrder.status_id){
                purchaseOrder.status_id = 1; //Establece un estado predeterminado si está vacío
            }
        },
        afterValidate: (purchaseOrder, options) => {
            if(purchaseOrder.notes && purchaseOrder.notes.length > 500){
                throw new Error('Las notas no pueden exceder los 500 caracteres.');
            }
        }
    }
});

module.exports = PurchaseOrders;



