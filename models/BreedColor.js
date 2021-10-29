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
            type: DataTypes.STRING(20),
            allowNull: false,
            references: {
                model: 'breed',
                key: 'id'
            }
        },
        color_id: {
            type: DataTypes.STRING(20),
            allowNull: false,
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