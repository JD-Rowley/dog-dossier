const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class BreedPosts extends Model{}

BreedPosts.init(
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
        post_id: {
            type: DataTypes.INTEGER,
            references: {
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
        modelName: 'breedPosts'
    }
);

module.exports = BreedPosts;