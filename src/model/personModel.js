const Sequelize = require('sequelize');
const database = require('../dal/index');

const Person = database.define('person', {
    person_id: {
        type: Sequelize.UUID,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.STRING,
        allowNull: false
    },
})

module.exports = Person;