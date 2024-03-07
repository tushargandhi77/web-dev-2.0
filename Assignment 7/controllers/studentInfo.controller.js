const StudentInfo = require('../model/studentinfo.model');


const addStudentInfo = async (req,res)=>{
    try{
        const newStudentInfo = new StudentInfo(req.body);
        const saveStudentInfo = await newStudentInfo.save();
        res.json(saveStudentInfo)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const getAllstudent = async(req,res)=>{
    try{
        const  studentData = await StudentInfo.find()
        res.json(studentData)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const getStudentByRollNo = async(req,res)=>{
    try{
        const student = await StudentInfo.findOne({rollNo:req.params.rollNo})
        if(!student){
            return res.status(404).json({message:"student not found"})
        }
        res.json(student)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const updateStudentByrollNo = async(req,res)=>{
    try{
        const updatestudent = await StudentInfo.findOneAndUpdate(
            {rollNo:req.params.rollNo},
            req.body,
            {new:true}
        )
        if(!updatestudent){
            return res.status(404).json({message:"student not found"})
        }
        res.json(updatestudent)
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

const deleteStudentByrollNo = async(req,res)=>{
    try{
        const deleteStudent = await StudentInfo.findOneAndDelete({rollNo:req.params.rollNo})
        if(!deleteStudent){
            return res.status(404).json({message:"student not found"})
        }
        res.json({message:"Deleted succesfully"})
    }
    catch(error){
        res.status(500).json({error:error.message})
    }
}

module.exports = {
    addStudentInfo,
    updateStudentByrollNo,
    getStudentByRollNo,
    deleteStudentByrollNo,
    getAllstudent
}