const sequelize= require('../database/database')
const {DataTypes} = require('Sequelize')
const models = require('./modelos')


const marcas = sequelize.define('marcas', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    name: {
        type: DataTypes.STRING
    },
    company: {
            type: DataTypes.STRING
    }, 
    foundation: {
        type: DataTypes.INTEGER
    }
})

marcas.hasMany(models, {
    foreignKey: 'marcas_id', 
    sourceKey: 'id'
})

models.belongsTo(marcas, {
    foreignKey: 'marcas_id', 
    TarjetId: 'id'
})

module.exports = marcas