const mongoose = require('mongoose')

const studentInfoSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    rollNo:{
        type: String,
        required: true,
        unique: true,
    },
    mobile:{
        type:String,
        required: true,
        unique: true,
    },
    address:{
        type:String,
        required: true,
    },
    age:{
        type:Number,
        required: true,
    }
    
});

const StudentInfo = mongoose.model('StudentInfo',studentInfoSchema)

module.exports = StudentInfo

