const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class BreedHealth extends Model{}

BreedHealth.init(
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
        health_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'health',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'breedHealth'
    }
);

module.exports = BreedHealth;