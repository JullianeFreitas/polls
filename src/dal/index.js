require('dotenv').config()
const Sequelize = require('sequelize');

const host = process.env.HOST
const database = process.env.DATABASE
const user = process.env.USER
const password = process.env.PASSWORD
const port = process.env.PORT_DB

const sequelize = new Sequelize(`postgres://${user}:${password}@${host}:${port}/${database}`, 
{"dialect": "postgres",
"dialectOptions": {
    ssl: {
        require: true,
        rejectUnauthorized: false
      }
},
define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true
}
})

module.exports = sequelize;
