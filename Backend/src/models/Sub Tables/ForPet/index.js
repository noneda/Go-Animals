const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const ForPet = sequelize.define('ForPet', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    GENDER: {
        type: DataTypes.STRING,
        allowNull: false
    },
    OTHER: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'FOR_PET',
    timestamps: false
});

module.exports = ForPet;
