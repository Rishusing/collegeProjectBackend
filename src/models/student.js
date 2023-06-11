const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

    publicKey: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    batch: {
        type: String,
        require: true
    },
    branch: {
        type: String,
        require: true
    },
    course: {
        type: String,
        require: true
    },
    rollNumber: {
        type: String,
        require: true
    }


})

const Student = mongoose.model('Student', studentSchema)

module.exports = Student