

const {Model, DataTypes } = require("sequelize");
const sequelize = require("../data/db.js");

class Employees extends Model{}

Employees.init({
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    company: {
        type: DataTypes.STRING(50),
        allowNull: true, //por eso no se hace el validate acepta nulos
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'last_name',
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'first_name',

    },
    emailAddress: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'email_address',
        validate: {
            isEmail: {
                msg: "El correo electronico debe tener un formato válido.",
            },
        },
    },
    jobTitle: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'job_title',

    },
    businessPhone: {
        type: DataTypes.STRING(25),
        allowNull: true,
        field: 'business_phone',
        validate: {
            isNumeric: {
                msg: "El numero de telefono de la empresa solo debe contener dígitos.",
            },
        },
    },
    homePhone: {
        type: DataTypes.STRING(25),
        allowNull: true,
        field: 'home_phone',
        validate: {
            isNumeric: {
                msg: "El numero de telefono de casa solo debe contener dígitos.",
            },
        },
    },
    mobilePhone: {
        type: DataTypes.STRING(25),
        allowNull: true,
        field: 'mobile_phone',
        validate:{
            isNumeric:{
                msg: "El numero de telefono movil solo debe contener dígitos.",
            },
        },
    },
    faxNumber: {
        type: DataTypes.STRING(25),
        allowNull: true,
        fiel: 'fax_number',
        validate: {
            isNumeric: {
                msg: "El numero de fax solo debe contener digitos.",
            },
        },
    },
    address: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    city: {
        type: DataTypes.STRING(50),
        allowNull: true,
    },
    stateProvince: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'state_province',
    },
    zipPostalCode: {
        type: DataTypes.STRING(15),
        allowNull: true,
        field: 'zip_postal_code',
    },
    countryRegion: {
        type: DataTypes.STRING(50),
        allowNull: true,
        field: 'country_region',
    },
    webPage: {
        type: DataTypes.TEXT,
        allowNull: true,
        field: 'web_page',
        validate: {
            isUrl: {
                msg: "La página web debe ser una URL válida.",
            },
        },
    },
    notes: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    attachments: {
        type: DataTypes.BLOB,
        allowNull: true,
    },

}, {
    sequelize,
    modelName: 'employees',
    tableName: 'employees',
    timestamps: false,
});

module.exports = Employees;



