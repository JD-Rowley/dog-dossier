const { DataTypes } = require("sequelize/types");

class Breed extends Model{}

Breed.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        height: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        weight: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        coloring: {
            type: DataTypes.STRING,
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