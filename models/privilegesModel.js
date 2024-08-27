const { Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class Privileges extends Model { }

Privileges.init({

    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        validate: {
            notNull: {
                msg: "ID is required"
            },
            isInt: {
                msg: "ID must be an integer"
            },
            min: 1
        }
    },
    privilegeName: {
        type: DataTypes.STRING(50),
        //field: 'privilege_name',
        allowNull: true,
        validate: {
            len: {
                args: [0, 50],
                msg: 'El nombre del privilegio no puede tener más de 50 caracteres'
            }
        }
    }
}, {
    sequelize,
    modelName: 'Privilege',
    tableName: 'privileges',
    timestamps: false,
    indexes: [
        {
            name: 'idx_privilege_name',
            fields: ['privilege_name']
        }
    ]
});

module.exports = Privileges;