const { DataTypes } = require('sequelize');
const sequelize = require('../../database');

const Brand = sequelize.define('Brand', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    BNAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    OTHER: {
        type: DataTypes.STRING
    },
    PREMIUM: {
        type: DataTypes.BOOLEAN
    }
}, {
    tableName: 'BRAND',
    timestamps: false
});

module.exports = Brand;
