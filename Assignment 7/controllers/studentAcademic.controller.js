const StudentAcedemicInfo = require('../model/studentacedemicinfo.model')

const addStudentAcademicInfo = async (req,res)=>{
    try{
        const addStudentAcademic = new StudentAcedemicInfo(req.body)
        const saveStudentAcademic = await addStudentAcademic.save()
        res.json(saveStudentAcademic)
    }
    catch(err){
        console.log(err);
    }
}

const getAllStudentAcademicInfo = async(req,res)=>{
    try{
        const allAcademic = await StudentAcedemicInfo.find()
        res.json(allAcademic)
    }
    catch(error){
        res.status(500).json({message: error})
    }
}

const getStudentAcademicInfoByRollNo = async(req,res)=>{
    try{
        const studentAcademic = await StudentAcedemicInfo.findOne({rollNO:req.params.rollNO})
        if(!studentAcademic){
            res.status(404).json({message:"student not found"})
        }
        res.json(studentAcademic)
    }
    catch(error){
        res.status(500).json({message: error})
    }
}

const  updateStudentAcademicInfoByRollNo = async (req,res)=>{
    try{
        const studentupdate = await StudentAcedemicInfo.findOneAndUpdate({rollNO:req.params.rollNO},req.body,{new:true})

        if(!studentupdate){
            return res.status(404).json({message:"student not found"})
        }
        res.json(studentupdate)

    }
    catch(error){
        res.status(500).json({message: error})
    }
}

const  deleteStudentAcademicInfoByRollNo = async(req,res)=> {
    try{
        const  deletedStudent = await StudentAcedemicInfo.findOneAndDelete({rollNo:req.params.rollNO})
        if (!deletedStudent) {
            return res.status(404).json({ message: "No record with that roll number exists." })
          }
          res.json({ message: 'Deletion was successful!' });
        
    }catch(err) {
        res.status(500).json({message: error})

    }
}

module.exports = {
    addStudentAcademicInfo,
    getAllStudentAcademicInfo,
    getStudentAcademicInfoByRollNo,
    updateStudentAcademicInfoByRollNo,
    deleteStudentAcademicInfoByRollNo
}
