const { Model, DataTypes } = require("sequelize");
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
        breed_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
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
        color_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        level_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            reference: {
                model: 'level',
                key: 'id'
            }
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