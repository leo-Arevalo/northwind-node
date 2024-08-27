const { Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class Shipper extends Model {}

Shipper.init ({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        validate: {
            isInt: {
                msg: 'El id debe ser un entero válido.'
            },
            notNull: {
                msg: 'El campo id no puede ser nulo.'
            }
        }
    },
    company: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
        validate: {
            len:{
                args: [0, 50],
                message: 'El campo company no puede exeder los 50 caracteres.'
            },
        }
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El campo last name no puede superar los 50 caracteres.'
            }
        }
    },
    email_address: {
        type: DataTypes.STRING(50),
        allowNull: true,
        defaultValue: null,
        validate:{
            len: {
                args: [0, 50],
                msg: 'El campo email no puede superar los 50 caracteres.'
            },
            isEmail: {
                msg: 'El campo email debe ser una dirección de correo electronico válida.'
            }
        }
    },
    job_title: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El campo job no puede superar los 50 caracteres.'
            }
        }
    },
    business_phone: {
        type: DataTypes.STRING(25),
        allowNull: true,
        validate: {
            len: {
                args: [0, 25],
                msg: 'El campo business phone no puede superar los 25 caracteres.'
            }
        }
    },
    home_phone: {
        type: DataTypes.STRING(25),
        allowNull: true,
        validate: {
            len: {
                args: [0, 25],
                msg: 'El campo home phone no puede superar los 25 caracteres.'
            }
        }
    },
    mobile_phone: {
        type: DataTypes.STRING(25),
        allowNull: true,
        validate: {
            len: {
                args: [0, 25],
                msg: 'El campo mobile phone no puede superar los 25 caracteres.'
            }
        }
    },
    fax_number: {
        type: DataTypes.STRING(25),
        allowNull: true,
        validate: {
            len: {
                args: [0, 25],
                msg: 'El campo fax number no puede superar los 25 caracteres.'
            }
        }
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El campo city no puede superar los 50 caracteres.'
            }
        }
    },
    state_province: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El campo state province no puede exceder los 50 caracteres.'
            }
        }
    },
    zip_postal_code: {
        type: DataTypes.STRING(15),
        allowNull: true,
        validate: {
            len: {
                args: [0, 15],
                msg: 'El campo codigo postal no puede exceder los 15 caracteres.'
            }
        }
    },
    country_region: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El campo country region no puede exceder los 50 caracteres.'
            }
        }
    },
    web_page: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    attachments: {
        type: DataTypes.BLOB('long'),
        allowNull: true,
    }
}, {
    sequelize,
    modelName: 'Shipper',
    tableName: 'Shippers',
    timestamps: false,
    indexes: [
        {fields: ['city']},
        {fields: ['company']},
        {fields: ['first_name']},
        {fields: ['last_name']},
        {fields: ['zip_postal_code']},
        {fields: ['state_province']},
    ]
});

module.exports = Shipper;