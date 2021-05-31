const Connection = require('./index');
module.exports.getTeachers = async function () {
    try {
        await Connection.connect.authenticate();
        console.log('Connection has been established successfully.');
        const [results] = await Connection.connect.query('select * from teacher');
        return results;
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
