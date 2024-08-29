
const {Model , DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class Customers extends Model {}

Customers.init ({
    id: {type:DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
        validate:{
            isInt: {
                msg: 'El ID debe ser un entero valido.'
            }
        }
    },
    company: {
        type:DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'Company no puede superar los 50 caracteres.'
            }
        }
    },
    last_name: {
        type:DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args:[0, 50],
                msg: 'last name no puede superar los 50 caracteres.'
            }
        }
    },
    first_name: {
        type:DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0,50],
                msg: 'first name no puede superar los 50 caracteres.'
            },
        }
    },
    email_address: {
        type:DataTypes.STRING(50),
        allowNull: true,
        validate: {
            isEmail: {
                msg: 'Email debe ser un email valido.'
            },
            len: {
                args: [0, 50],
                msg: 'Email no debe superar los 50 caracteres.'
            }
        }
    },
    job_title: {
        type:DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'Job title no puede superar los 50 caracteres.'
            }
        }
    },
    business_phone: {
        type:DataTypes.STRING(25),
        allowNull: true,
        validate: {
            len: {
                args: [0, 25],
                msg: 'Business phone no puede superar los 25 caracteres.'
            }
        }
    },
    home_phone: {
        type:DataTypes.STRING(25),
        allowNull: true,
        validate: {
            len: {
                args: [0, 25],
                msg: 'home phone phone no puede superar los 25 caracteres.'
            }
        }
    },
    mobile_phone: {
        type:DataTypes.STRING(25),
        allowNull: true,
        validate: {
            len: {
                args: [0, 25],
                msg: 'mobile phone no puede superar los 25 caracteres.'
            }
        }
    },
    fax_number: {
        type:DataTypes.STRING(25),
        allowNull: true,
        validate: {
            len: {
                args: [0, 25],
                msg: 'fax number no puede superar los 25 caracteres.'
            }
        }
    },
    address: {
        type:DataTypes.TEXT,
         allowNull: true
    },
    city: {
        type:DataTypes.STRING(50)
        , allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'city no puede superar los 50 caracteres.'
            }
        }
    },
    state_province: {
        type:DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'state province no puede superar los 50 caracteres.'
            }
        }
    },
    zip_postal_code: {
        type:DataTypes.STRING(15),
        allowNull: true,
        validate: {
            len: {
                args: [0, 15],
                msg: 'zip postal code no puede superar los 15 caracteres.'
            }
        }
    },
    country_region: {
        type:DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'country/region no puede superar los 50 caracteres.'
            }
        }
    },
    web_page: {
        type:DataTypes.TEXT,
        allowNull: true,
        validate: {
            isUrl: {
                msg: 'web page debe ser una URL válida.'
            }
        }
    },
    notes: {
        type:DataTypes.TEXT,
        allowNull: true
    },
    attachments: {
        type:DataTypes.BLOB("long"),
        allowNull: true
    }

},{
    sequelize,
    timestamps: false, //deshabilita las marcas de tiempo automáticas
    indexes: [
        {fields: ["city"]},
        {fields: ["company"]},
        {fields: ["first_name"]},
        {fields: ["last_name"]},
        {fields: ["zip_postal_code"]},
        {fields: ["state_province"]},
    ]
});

module.exports = Customers;



