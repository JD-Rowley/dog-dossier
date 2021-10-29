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
            type: DataTypes.STRING(20),
            allowNull: false,
            references: {
                model: 'breed',
                key: 'id'
            }
        },
        health_id: {
            type: DataTypes.STRING(20),
            allowNull: false,
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