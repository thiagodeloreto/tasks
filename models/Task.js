//Importa DataTypes do Sequelize
const { DataTypes } = require('sequelize')

//Chama a conexão do banco
const db = require('../db/conn')

const Task = db.define('Task', {
    title: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    },
})

module.exports = Task