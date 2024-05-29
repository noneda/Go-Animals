const { DataTypes } = require('sequelize');
const sequelize = require('../../../database/');

const Kind = sequelize.define('Kind', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    KIND: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'KIND',
    timestamps: false
});

module.exports = Kind;
