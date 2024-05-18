const { DataTypes } = require('sequelize');
const sequelize = require('../../database')

const Batch = sequelize.define('Batch', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    ICA_NUMBER: {
        type : DataTypes.INTEGER,
    },
    BATCH_DATE: {
        type : DataTypes.DATE,
    },
    DUE_DATE: {
        type : DataTypes.DATE,
    },
    PRODUCT: {
        type: DataTypes.INTEGER,
        references : {
            model : setEstudianteBalanceEnergia,
            key : 'id' 
        }
    },
    KIND_OF_PRODUCT : {
        type : DataTypes.STRING,
    },
    UNITS : {
        type : DataTypes.INTEGER
    },
    WORTHS : {
        type : DataTypes.DOUBLE
    },
    MARGIN_OF_GAIN : {
        type : DataTypes.FLOAT
    },
}, {
    tableName: 'Batch',
    timestamps: false
});

// Define relationships

module.exports = Batch;
