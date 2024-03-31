const express = require('express')
const router = express.Router()

const studentInfotController = require('../controllers/studentInfo.controller')

router.post('/',studentInfotController.addStudentInfo)

router.get('/',studentInfotController.getAllstudent)

router.get('/:rollNo',studentInfotController.getStudentByRollNo)

router.put('/:rollNo',studentInfotController.updateStudentByrollNo)

router.delete('/:rollNo',studentInfotController.deleteStudentByrollNo)

module.exports = router