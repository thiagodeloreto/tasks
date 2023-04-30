//Cria a conexão com o Banco de Dados MySQL
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('tasks', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

try {

    sequelize.authenticate()
    console.log('Conectamos ao MySQL via Sequelize!')
    
} catch (error) {
    console.log(`Erro na conexão: ${error}`)
}

module.exports = sequelize