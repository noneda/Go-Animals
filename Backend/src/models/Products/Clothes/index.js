const { DataTypes } = require('sequelize');
const sequelize = require('../../../database');
const Kind = require('../../Sub Tables/Kind');
const Brand = require('../../Sub Tables/Brand');
const TypePet = require('../../Sub Tables/TypePet');
const ForPet = require('../../Sub Tables/ForPet');

const Clothes = sequelize.define('Clothes', {
    ID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    CKIND: {
        type: DataTypes.INTEGER,
        references: {
            model: Kind,
            key: 'ID'
        }
    },
    CNAME: {
        type: DataTypes.STRING,
        allowNull: false
    },
    CBRAND: {
        type: DataTypes.INTEGER,
        references: {
            model: Brand,
            key: 'ID'
        }
    },
    CTYPE: {
        type: DataTypes.INTEGER,
        references: {
            model: TypePet,
            key: 'ID'
        }
    },
    CFOR: {
        type: DataTypes.INTEGER,
        references: {
            model: ForPet,
            key: 'ID'
        }
    },
    EXTENT: {
        type: DataTypes.STRING
    },
    PICTURE: {
        type: DataTypes.BLOB
    }
}, {
    tableName: 'CLOTHES',
    timestamps: false
});

module.exports = Clothes;
