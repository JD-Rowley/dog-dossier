const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const simplecrypt = require('simplecrypt');
const sc = simplecrypt();

class User extends Model {
    // checkPassword(loginPw) {
    //     return sc.decrypt(loginPw);
    // }
}

// define table columns and config
User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [8]
            }
        }
    },
    {
        hooks: {
            async beforeCreate(newUserData) {
                newUserData.password = await sc.encrypt(newUserData.password);
                return newUserData;
            },
            async beforeUpdate(updatedUserData) {
                updatedUserData.password = await sc.encrypt(updatedUserData.password);
                return updatedUserData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;