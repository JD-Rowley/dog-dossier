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
        breed_name: {
            type: DataTypes.STRING(20),
            allowNull: false,
        },
        height_min: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate: {
                min: 5,
                max: 40
            }
        },
        height_max: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                min: 7,
                max: 60
            }
        },
        weight_min: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate: {
                min: 5,
                max: 150
            }
        },
        weight_max: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            validate: {
                min: 7,
                max: 200
            }
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