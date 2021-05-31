const db = require("../Model");
const TeacherModel = db.teacherModel;
const teacherNativeQuery = require('../Database/teacherQuery');

module.exports.getAllTeachers = async (request) => {
    let teachers;
    try {
        teachers = await TeacherModel.findAll();
    }
    catch (e) {
        console.log(e);
    }

    return teachers;

}

module.exports.getAllTeachersthroughQuery = async (request) => {
    let teachers;
    try {
        teachers = await teacherNativeQuery.getTeachers();
    }
    catch (e) {
        console.log(e);
    }

    return teachers;
}