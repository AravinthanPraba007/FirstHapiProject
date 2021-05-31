const Sequelize = require('sequelize');
const Connection = require('../Database/index');

module.exports = function (Connection, Sequelize) {

    const teacher = Connection.connect.define("teacher", {

        teacher_id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        teacher_name: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        }
    }
    );
    return teacher;
}


