const { Model, DataTypes } = require("sequelize/types");
const sequelize = require('../config/connection');

class Breed extends Model{}

Breed.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        height_min: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        height_max: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight_min: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight_max: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        coloring: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        health_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'health',
                key: 'id'
            }
        },
        traits_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'traits',
                key: 'id'
            }
        },
        post_id: {
            type: DataTypes.INTEGER,
            reference: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'breed'
    }
);

module.exports = Breed;