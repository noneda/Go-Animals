const { DataTypes } = require('sequelize');
const sequelize = require('../../database');
const Batch = require('../Batch');

const Inventory = sequelize.define('Inventory', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    PRODUCT: {
        type: DataTypes.INTEGER
    },
    KIND_OF_PRODUCT: {
        type: DataTypes.STRING
    },
    BATCH: {
        type: DataTypes.INTEGER,
        references: {
            model: Batch,
            key: 'ID'
        },
        onDelete: 'CASCADE'
    },
    TOTAL_UNITS: {
        type: DataTypes.INTEGER
    },
    PRICE: {
        type: DataTypes.DOUBLE
    }
}, {
    tableName: 'INVENTORY',
    timestamps: false
});

module.exports = Inventory;
