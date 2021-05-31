const Sequalize = require('sequelize');

const dbConnection = new Sequalize('postgres://postgres:root@localhost:5432/school', {
    logging: console.log,
    define: {
        timestamps: false, // true by default
        freezeTableName: true // Model tableName will be the same as the model name
    }
});

module.exports.connect = dbConnection;