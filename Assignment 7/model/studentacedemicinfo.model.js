const mongoose = require('mongoose')

const StudentAcedemicInfoSchema = mongoose.Schema({
    rollNo:{
        type:String,
        required: true,
        unique: true,
    },
    grade:{
        type:String,
        required: true,
    },
    marks:{
        math:{
            type:"number",
            required:true
        },
        science:{
            type:"number",
            required:true
        },
        history:{
            type:"number",
           required:true 
        }
    }
})

const StudentAcedemicInfo = mongoose.model('StudentAcedemicInfo',StudentAcedemicInfoSchema)

module.exports = StudentAcedemicInfo;