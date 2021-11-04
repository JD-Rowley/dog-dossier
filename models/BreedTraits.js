const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class BreedTraits extends Model{}

BreedTraits.init(
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
        traits_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'traits',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'breedTraits'
    }
);

module.exports = BreedTraits;