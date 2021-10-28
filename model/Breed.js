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

        },
        weight: {

        },
        coloring: {

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

        }
    }
);

module.exports = Breed;