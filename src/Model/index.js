const Connecion = require("../Database/index");
const Sequelize = require('sequelize');
const db = {};
db.Sequelize = Sequelize;
db.sequelize = Connecion;
db.teacherModel = require("./Teacher")(Connecion, Sequelize);
module.exports = db;