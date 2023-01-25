const sequelize= require('../database/database')
const {DataTypes} = require('Sequelize')


const models = sequelize.define('models', {
    id: {
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    }, 
    name: {
        type: DataTypes.STRING
    },
    model: {
        type: DataTypes.INTEGER
    }, 
    cc: {
        type: DataTypes.INTEGER
    },
    state:{
        type: DataTypes.STRING
    }, 
    transmission: {
        type: DataTypes.STRING  
    },
    type: {
        type: DataTypes.STRING
    }
})




module.exports = models