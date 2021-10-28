const { Model, DataTypes } = require("sequelize/types");
const sequelize = require('../config/connection');

class Level extends Model{}

Level.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        level_name: {
            type: DataTypes.STRING(10),
            allowNull: false
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'level'
    }
);

module.exports = Level;