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
            type: DataTypes.STRING(20),
            allowNull: false,
            references: {
                model: 'breed',
                key: 'id'
            }
        },
        traits_id: {
            type: DataTypes.STRING(20),
            allowNull: false,
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