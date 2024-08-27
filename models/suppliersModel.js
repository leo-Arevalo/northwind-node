const { Model, DataTypes } = require("sequelize");
const sequelize = require("../data/db.js");

class Suppliers extends Model { }

Suppliers.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    company: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50], //longitud maxima de 50 caracteres
                msg: 'El nombre de la compañia no puede exeder los 50 caracteres'
            },
        },
    },
    last_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50], //longitud maxima de 50 caracteres
                msg: 'El Apellido no puede exeder los 50 caracteres'
            },
        },
    },
    first_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50], //longitud maxima de 50 caracteres
                msg: 'El nombre no puede exeder los 50 caracteres'
            },
        },
    },
    email_address: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            isEmail: {
                msg: 'El correo electrónico debe ser válido.'
            },
            len: {
                args: [0, 50], //longitud maxima de 50 caracteres
                msg: 'El correo electronico no puede exeder los 50 caracteres'
            },
        },
    },
    job_title: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50], //longitud maxima de 50 caracteres
                msg: 'El titulo del trabajo no puede exeder los 50 caracteres'
            },
        },
    },
    business_phone: {
        type: DataTypes.STRING(25),
        allowNull: true,
        validate: {
            is: {
                args: /^[\d\s\-()+]+$/i,
                msg: 'El número de teléfono comercial debe ser válido y puede conter solo números, espacios, paréntesis, y guiones'
            },
        },
    },
    home_phone: {
        type: DataTypes.STRING(25),
        allowNull: true,
        validate: {
            is: {
                args: /^[\d\s\-()+]+$/i,
                msg: 'El número de teléfono de casa debe ser válido y puede conter solo números, espacios, paréntesis, y guiones'
            },
        },
    },
    mobile_phone: {
        type: DataTypes.STRING(25),
        allowNull: true,
        validate: {
            is: {
                args: /^[\d\s\-()+]+$/i,
                msg: 'El número de teléfono móvil debe ser válido y puede conter solo números, espacios, paréntesis, y guiones'
            },
        },
    },
    fax_number: {
        type: DataTypes.STRING(25),
        allowNull: true,
        validate: {
            is: {
                args: /^[\d\s\-()+]+$/i,
                msg: 'El número de fax debe ser válido y puede conter solo números, espacios, paréntesis, y guiones'
            },
        },
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'La ciudad no puede exceder los 50 caracteres.'
            }
        }
    },
    state_province: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El estado o provincia no puede exceder los 50 caracteres.'
            }
        }
    },
    zip_postal_code: {
        type: DataTypes.STRING(15),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El código postal no puede exceder los 15 caracteres.'
            }
        }
    },
    country_region: {
        type: DataTypes.STRING(50),
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El país o region no puede exceder los 50 caracteres.'
            }
        }
    },
    web_page: {
        type: DataTypes.TEXT,
        allowNull: true,
        validate: {
            isUrl: {
                msg: 'La página web debe ser una URL válida.'
            }
        }
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    attachments: {
        type: DataTypes.BLOB,
        allowNull: true
    }
}, {
    sequelize,
    modelName: 'Suppliers',
    tableName: 'suppliers',
    timestamps: false, //desactivamos createdAt y updatedAt
    indexes: [
        {
            fields: ['city']
        },
        {
            fields: ['company']
        },
        {
            fields: ['first_name']
        },
        {
            fields: ['last_name']
        },
        {
            fields: ['zip_postal_code']
        },
        {
            fields: ['state_province']
        }
    ],
    hooks: {
        beforeValidate: (supplier, options) => {
            //agregar logica antes de la validación, como formateo de datos.
            //Normalizamos el nombre de la compañia
            if(supplier.company){
                supplier.company = supplier.company.trim().toUpperCase();
            }

            //verificamos el formato del numero de telefono comercial
            if(supplier.business_phone){
                supplier.business_phone = supplier.business_phone.replace(/[\s\-()+]/g, '');
            }

        },
        afterValidate: (supplier, options) => {
            //aqui podemos agregar logica despues de la validación si es necesario.
            //Agregamos una nota automatica si no se proporcionaron notas.
            if(!supplier.notes){
                supplier.notes = 'Nota generada automáticamente: Sin notas adicionales proporcionadas.';
            }
            //Generar una alerta si no se proporciona un correo electronico
            if(!supplier.email_address){
                console.warn(`El proveedor ${supplier.first_name} ${supplier.last_name} no tiene un correo electrónico registrado.`);
            }
        }
    }
});

module.exports = Suppliers;

