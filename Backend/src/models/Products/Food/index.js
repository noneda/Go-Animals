const { DataTypes } = require('sequelize');
const sequelize = require('../../../database');
const Kind = require('../../Sub Tables/Kind');
const Brand = require('../../Sub Tables/Brand');
const TypePet = require('../../Sub Tables/TypePet');
const ForPet = require('../../Sub Tables/ForPet');

const Food = sequelize.define('Food', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    FKIND: {
        type: DataTypes.INTEGER,
        references: {
            model: Kind,
            key: 'ID'
        }
    },
    FNAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    FBRAND: {
        type: DataTypes.INTEGER,
        references: {
            model: Brand,
            key: 'ID'
        }
    },
    FTYPE: {
        type: DataTypes.INTEGER,
        references: {
            model: TypePet,
            key: 'ID'
        }
    },
    SIZES: {
        type: DataTypes.INTEGER
    },
    FFOR: {
        type: DataTypes.INTEGER,
        references: {
            model: ForPet,
            key: 'ID'
        }
    },
    WEIGHTS: {
        type: DataTypes.INTEGER
    },
    EXTENT: {
        type: DataTypes.STRING
    },
    PICTURE: {
        type: DataTypes.BLOB
    }
}, {
    tableName: 'FOOD',
    timestamps: false
});

module.exports = Food;
