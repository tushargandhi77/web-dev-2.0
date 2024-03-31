const express = require('express')

const router = express.Router()

const studentacedemicinfo = require('../controllers/studentAcademic.controller')


router.post('/',studentacedemicinfo.addStudentAcademicInfo)

router.get('/',studentacedemicinfo.getAllStudentAcademicInfo)

router.get('/:rollNo',studentacedemicinfo.getStudentAcademicInfoByRollNo)

router.put('/:rollNo',studentacedemicinfo.updateStudentAcademicInfoByRollNo)

router.delete('/:rollNo',studentacedemicinfo.deleteStudentAcademicInfoByRollNo)

module.exports = router
