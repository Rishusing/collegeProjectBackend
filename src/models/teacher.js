const mongoose = require('mongoose')

const teacherSchema = new mongoose.Schema({

    publicKey: {
        type: String,
        require: true
    },
    employeeId: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    role: {
        type: String,
        require: true
    },
    department: {
        type: String,
        require: true
    }
})

const Teacher = mongoose.model('Teacher', teacherSchema)

module.exports = Teacher