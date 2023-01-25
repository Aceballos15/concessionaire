const Sequelize = require('Sequelize')


const sequelize = new Sequelize('concessionaire', 'postgres', 'aceballos', {
    'host': 'localhost',
    'dialect': 'postgres'
})

module.exports = sequelize

