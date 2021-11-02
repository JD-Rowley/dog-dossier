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
            type: DataTypes.STRING,
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
                min: 3,
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
        // level_id: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        //     defaultValue: 1,
        //     reference: {
        //         model: 'level',
        //         key: 'id'
        //     }
        // }
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