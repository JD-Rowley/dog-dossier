const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class BreedColor extends Model{}

BreedColor.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        breed_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'breed',
                key: 'id'
            }
        },
        color_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'color',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'breedColor'
    }
);

module.exports = BreedColor;