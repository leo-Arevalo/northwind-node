const { Model, DataTypes } = require('sequelize');
const sequelize = require('../data/db.js');

class EmployeesPrivileges extends Model { }

EmployeesPrivileges.init({

    employee_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            notNull: {
                msg: "Employee ID is required"
            },
            isInt: {
                msg: "Employee ID must be an integer"
            }
        }
    },
    privilege_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        validate: {
            notNull: {
                msg: "Privilege ID is required"
            },
            isInt: {
                msg: "Privilege ID must be an integer"
            }
        }
    }
}, {
    sequelize,
    modelName: 'EmployeesPrivileges',
    tableName: 'employee_privileges',
    timestamps: false

});
module.exports = EmployeesPrivileges;


