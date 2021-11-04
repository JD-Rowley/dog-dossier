const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Traits extends Model{}

Traits.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        traits_name: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'traits'
    }
);

module.exports = Traits;