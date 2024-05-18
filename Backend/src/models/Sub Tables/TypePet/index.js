const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const TypePet = sequelize.define('TypePet', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ANIMAL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    AGES: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'TYPE_PET',
    timestamps: false
});

module.exports = TypePet;
