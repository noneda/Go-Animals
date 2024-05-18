const { DataTypes } = require('sequelize');
const sequelize = require('../../../database');
const Kind = require('../../Sub Tables/Kind');
const Brand = require('../../Sub Tables/Brand');
const TypePet = require('../../Sub Tables/TypePet');
const ForPet = require('../../Sub Tables/ForPet');

const Hygiene = sequelize.define('Hygiene', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    HKIND: {
        type: DataTypes.INTEGER,
        references: {
            model: Kind,
            key: 'ID'
        }
    },
    HNAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    HBRAND: {
        type: DataTypes.INTEGER,
        references: {
            model: Brand,
            key: 'ID'
        }
    },
    HTYPE: {
        type: DataTypes.INTEGER,
        references: {
            model: TypePet,
            key: 'ID'
        }
    },
    HFOR: {
        type: DataTypes.INTEGER,
        references: {
            model: ForPet,
            key: 'ID'
        }
    },
    SIZES: {
        type: DataTypes.INTEGER
    },
    SMELL: {
        type: DataTypes.STRING
    },
    EXTENT: {
        type: DataTypes.STRING
    },
    PICTURE: {
        type: DataTypes.BLOB
    }
}, {
    tableName: 'HYGIENE',
    timestamps: false
});

module.exports = Hygiene;
